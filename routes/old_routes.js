var express = require('express');
var oldRouter = express.Router();
var mongo = require('mongodb');



oldRouter.get('/api/projects', (req, res) => {

    mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
        if (err) console.log('Database error: ' + err);
        let db = dbo.db('portfolio');
        let coll = db.collection('projects');

        db.collection('projects').find({}).sort({ sorting: 1 }).toArray((err, data) => { res.json(data) });

    })
});

oldRouter.get('/api/newsLetter', (req, res) => {

    mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
        if (err) console.log('Database error: ' + err);
        let db = dbo.db('portfolio');
        let coll = db.collection('newsLetter');

        db.collection('newsLetter').find({}).toArray((err, data) => {
            // console.log(data);
            res.json({ data: data.length })
        });

    })
});

oldRouter.get('/api/certs', (req, res) => {

    mongo.connect(process.env.CONNECTION_STRING, (err, dbo) => {
        if (err) console.log('Database error: ' + err);
        let db = dbo.db('portfolio');
        let coll = db.collection('projects');

        db.collection('certificates').find({}).toArray((err, data) => { res.json(data) });

    })
});

module.exports = oldRouter;