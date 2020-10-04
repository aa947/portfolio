var express = require('express');
var projectRouter = express.Router();
var mongo = require('mongodb');


projectRouter.get('/api/p/:project_id', (req, res) => {

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

projectRouter.get('/api/like/:project_id', (req, res) => {

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



projectRouter.post('/api/comment/:project_id', (req, res) => {
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

module.exports = projectRouter;