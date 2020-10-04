var express = require('express');
var reviewRouter = express.Router();
var mongo = require('mongodb');



/*
*
* fetch reviews 
*
*/

reviewRouter.get('/api/reviews', (req, res) => {

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

reviewRouter.post("/api/addReview", (req, res) => {

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


reviewRouter.post("/api/sub", (req, res) => {

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

module.exports = reviewRouter;