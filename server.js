const express = require('express');
var mongo = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
require('dotenv').config();

var ViewsUp = require('./src/viewsUp');
var AddVisitorIp = require('./src/addVisitorIp');
const requestIp = require('request-ip');


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

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);