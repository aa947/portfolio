const express = require('express');
var mongo = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
require('dotenv').config();

var ViewsUp = require('./src/viewsUp');
var AddVisitorIp = require('./src/addVisitorIp');
const requestIp = require('request-ip');
var path = require('path');


const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.get('/api/views', (req, res) =>{
  const clientIp = requestIp.getClientIp(req);

 
  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if(err) console.log('Database error: ' + err);
      let db = dbo.db('portfolio');
      let coll = db.collection('visitors');

      ViewsUp.ViewsUp(db, 'visitors', ObjectId('5e28474c19b28f31d6657545'));
      AddVisitorIp.addVisitorIp(db, 'visitors', ObjectId('5e28474c19b28f31d6657545'), clientIp);

      res.json({ done: "a visitor Added" });


    });
});

app.get( '/api/projects', (req, res)=>{

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if(err) console.log('Database error: ' + err);
      let db = dbo.db('portfolio');
      let coll = db.collection('projects');

      db.collection('projects').find({}).toArray((err, data)=> { res.json(data) });

  })
});

app.get( '/api/certs', (req, res)=>{

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if(err) console.log('Database error: ' + err);
      let db = dbo.db('portfolio');
      let coll = db.collection('projects');

      db.collection('certificates').find({}).toArray((err, data)=> { res.json(data) });

  })
});


app.get( '/api/footer', (req, res)=>{

  mongo.connect(process.env.CONNECTION_STRING || ENV['CONNECTION_STRING'], (err, dbo) => {
    if(err) console.log('Database error: ' + err);
      let db = dbo.db('portfolio');
      let coll = db.collection('visitors');

      db.collection('visitors').findOne({_id: ObjectId('5e28474c19b28f31d6657545')})
      .then((data)=> {
        let count = data.counter;
        let unique = data.unique_visitors; 
        res.json({ count: count , unique: unique  })
       });

  })
});


if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>{
    res.sendFile( path.join(__dirname, 'client', 'build', 'index.html' ));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);