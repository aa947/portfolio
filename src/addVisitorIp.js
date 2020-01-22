require('mongodb');


var addVisitorIp = function (database, collection, id, clientIp) {


    database.collection(collection).findOne({ _id: id }, (err, doc) => {
        if (doc.ips.includes(clientIp)) { return; }

        else {

            database.collection(collection).findOneAndUpdate({ _id: id }, { $push: { ips: clientIp }, $inc: { unique_visitors: 1 } })

                .then((data) => { console.log(data.counter) })
                .catch((err) => { console.log(err) });
        }
    })

}


module.exports = { addVisitorIp };