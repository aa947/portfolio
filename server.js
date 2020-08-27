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



const app = express();
app.use(cors());
app.use(bodyParser.json());



app.get('/api/views', (req, res) => {
  const clientIp = requestIp.getClientIp(req);


  mongo.connect(process.env.CONNECTION_STRING, async (err, dbo) => {
    if (err) console.log('Database error: ' + err);
    let db = dbo.db('portfolio');
    let coll = db.collection('visitors');

    ViewsUp.ViewsUp(db, 'visitors', ObjectId('5e28474c19b28f31d6657545'));
    AddVisitorIp.addVisitorIp(db, 'visitors', ObjectId('5e28474c19b28f31d6657545'), clientIp);

    db.collection('visitors').findOne({ _id: ObjectId('5e28474c19b28f31d6657545') })
      .then((data) => {
        let count = data.counter;
        let unique = data.unique_visitors;
        res.json({ count: count, unique: unique })
      });

  });
});


const certsRoute = require("./routes/certs_route");
app.use('/', certsRoute);

const messageRoute = require("./routes/message_route");
app.use("/", messageRoute);

const oldRoutes = require("./routes/old_routes");
app.use("/", oldRoutes);


const projectRoute = require("./routes/project_routes");
app.use("/", projectRoute);


const reviewRoute = require("./routes/reviews_route");
app.use("/", reviewRoute)

/////////servecies Route\\\\\\\\\\\\\
let ServicesRoute = require('./routes/servicesRoute');
app.use('/api/s', ServicesRoute);


///////// CV Download Route\\\\\\\\\\\\\
let cvRoute = require('./routes/dwonload_cv');
app.use('/pdf', cvRoute);

///////// Claim Free Service Route \\\\\\\\\\\\\
let FreeServiceRoute = require('./routes/claim_free_service');
app.use('/api/claim-free-service', FreeServiceRoute);


//uncomment this to deploy to heroku

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));



  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});