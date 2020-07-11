/**
 * Author:    Ahmad Ali
 * Created:   Feb.2020
 * File: server for https://ahmad-ali.co.uk/
 * 
 * (c) Copyright by Ahmad Ali.
 **/

const express = require('express');
var mongo = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
require('dotenv').config();

var ViewsUp = require('./src/viewsUp');
var AddVisitorIp = require('./src/addVisitorIp');
const requestIp = require('request-ip');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
const nodemailer = require("nodemailer");



const app = express();
app.use(cors());
app.use(bodyParser());



app.use(express.static(path.join(__dirname, "client", "public")));



app.get('/api/views', (req, res) => {
  const clientIp = requestIp.getClientIp(req);


  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('visitors');

    ViewsUp.ViewsUp(db, 'visitors', ObjectId('5e28474c19b28f31d6657545'));
    AddVisitorIp.addVisitorIp(db, 'visitors', ObjectId('5e28474c19b28f31d6657545'), clientIp);

    res.json({ done: "a visitor Added" });


  });
});

app.get('/api/projects', (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('projects');

    db.collection('projects').find({}).sort({ sorting: 1 }).toArray((err, data) => { res.json(data) });

  })
});

app.get('/api/newsLetter', (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('newsLetter');

    db.collection('newsLetter').find({}).toArray((err, data) => {
      //console.log(data);
      res.json({ data: data.length })
    });

  })
});


app.get('/api/certs', (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('projects');

    db.collection('certificates').find({}).toArray((err, data) => { res.json(data) });

  })
});


app.get('/api/footer', (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('visitors');

    db.collection('visitors').findOne({ _id: ObjectId('5e28474c19b28f31d6657545') })
      .then((data) => {
        let count = data.counter;
        let unique = data.unique_visitors;
        res.json({ count: count, unique: unique })
      });

  })
});

app.get('/api/p/:project_id', (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('projects');
    let pproject_id = req.params.project_id;

    db.collection('projects').findOne({ _id: ObjectId(pproject_id) })
      .then((data) => {

        res.json(data);
      });

  })
});

app.get('/api/e/:project_id', (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('projects');
    let pproject_id = req.params.project_id;

    db.collection('projects').findOne({ _id: ObjectId(pproject_id) })
      .then((data) => {

        res.json(data);
      });

  })
});
app.post('/api/e/:project_id', (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('projects');
    let pproject_idd = req.params.project_id;
    let newDoc = req.body.submittedData;
    console.log(req.params)
    console.log('pr id', pproject_idd);
    console.log('id', newDoc)


    db.collection('projects').findOneAndUpdate({ _id: ObjectId(pproject_idd) }, {
      $set: {
        name: newDoc.name,
        lang: newDoc.lang,
        photo: newDoc.photo,
        video: newDoc.video,
        date: newDoc.date,
        github_url: newDoc.github_url,
        live_demo: newDoc.live_demo,
        intro: newDoc.intro,
        tasks: newDoc.tasks,
        features: newDoc.features,
        inspired_by: newDoc.inspired_by,
        fontAwesome: newDoc.fontAwesome,
        sorting: newDoc.sorting
      }
    })
      .then((data) => {

        res.json({ data: data, message: 'OK' });
      });

  })
});

app.get('/api/like/:project_id', (req, res) => {

  const clientIp = requestIp.getClientIp(req);
  let pproject_id = req.params.project_id;


  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('projects');

    db.collection('projects').findOne({ _id: ObjectId(pproject_id) }, (err, doc) => {
      if (doc.likes_ips.includes(clientIp)) { return res.json({ result: "You have likes this project before, You can't like Twice!!", code: 0 }); }

      else {

        db.collection('projects').findOneAndUpdate({ _id: ObjectId(pproject_id) }, { $push: { likes_ips: clientIp }, $inc: { likes: 1 } })
          .then((data) => {

            res.json({ code: 1 });
          });
      }
    })



  })
});


app.get("/api/c/:cert_id", (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('certificates');
    let cert_id = req.params.cert_id;

    db.collection('certificates').findOne({ _id: ObjectId(cert_id) })
      .then((data) => {

        res.json(data);
      });

  })
});


/*
*
* fetch reviews 
*
*/

app.get('/api/reviews', (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');

    db.collection('reviews').find({}).sort({ _id: -1 }).toArray((err, data) => { res.json(data) });

  })
});

/*
*
* Add review
*
*/

app.post("/api/addReview", (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('reviews');

    let name = req.body.inputName;
    let rel = req.body.rel;
    let message = req.body.inputMessage;
    db.collection('reviews').insertOne({ name: name, rel: rel, message: message })
      .then((data) => {
        res.json(data);
      });
  })
});

/*
*
* Send Message
*
*/

app.post("/api/sendMessage", (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('messages');

    let name = req.body.inputName;
    let email = req.body.inputEmail;
    let message = req.body.inputMessage;
    db.collection('messages').insertOne({ name: name, email: email, message: message })
      .then((data) => {
        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
          // Generate test SMTP service account from ethereal.email
          // Only needed if you don't have a real mail account for testing
          // res.json({ result: "message saved" });
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.USER, // generated ethereal user
              pass: process.env.PASS // generated ethereal password
            },
            tls: {
              rejectUnauthorized: false
            }
          });

          // send mail with defined transport object
          let info = await transporter.sendMail({
            from: email, // sender address
            to: "aallii300300@gmail.com", // list of receivers
            subject: "New Message From your Portfolio", // Subject line
            text: message, // plain text body
            html: `<p>Sender_Name: ${name} </p> <p>Sender_Email: ${email} </p> <p> Message: ${message} </p>` // html body
          });

          console.log("Message sent: %s", info.messageId);
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

          // Preview only available when sending through an Ethereal account
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }

        main().catch(console.error);


        res.json({ result: "email Sent" });
      });


  })
});


app.post("/api/sub", (req, res) => {

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('newsLetter');

    let email = req.body.inputEmail;
    db.collection('newsLetter').insertOne({ email: email })
      .then((data) => {
        res.json(data);
      });

  })
});



app.post('/api/comment/:project_id', (req, res) => {
  console.log(req.body)

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('projects');
    let project_id = req.params.project_id;

    let comment = req.body.inputComment;
    db.collection('projects').findOneAndUpdate({ _id: ObjectId(project_id) }, { $push: { comments: comment } })
      .then((data) => {

        res.json({ code: 1 });
      });

  })
});

///////////////data Route\\\\\\\\\\\\\\

// this route is used when you want to push some data to the database.
// the data is already a json file contains all data to be pushed 
// example of these files are in /data folder.

app.get('/api/data', (req, res) => {

  const data = require('./data/certificates');

  mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('certificates');


    let data_to_enter = Object.values(data); //get array of docs to inter

    data_to_enter.map((elem) => {
      db.collection('certificates').insert(elem);
    });

  })
});


/////////servecies Route\\\\\\\\\\\\\
let ServicesRoute = require('./routes/servicesRoute');
app.use('/api/s', ServicesRoute);


///////// CV Download Route\\\\\\\\\\\\\
let cvRoute = require('./routes/download_cv');
app.use('/pdf', cvRoute);

///////// Claim Free Service Route \\\\\\\\\\\\\
let FreeServiceRoute = require('./routes/claim_free_service');
app.use('/api/claim-free-service', FreeServiceRoute);


// if (process.env.NODE_ENV !== 'production'){

//   app.use(express.static(__dirname+'/client/public'));

// }

//uncomment this to deploy to heroku

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);