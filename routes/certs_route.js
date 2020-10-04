var express = require('express');
var certRouter = express.Router();
var mongo = require('mongodb');


certRouter.get("/api/c/:cert_id", (req, res) => {

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


module.exports = certRouter;