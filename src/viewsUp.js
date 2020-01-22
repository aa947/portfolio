require('mongodb');

var ViewsUp = function (database, collection, id ) {
    database.collection(collection).findOneAndUpdate({_id : id}, {$inc: {counter: 1}}, {new:true})
    .then((data)=>{console.log(data.counter)})
    .catch((err)=>{console.log(err)});
}

module.exports = {ViewsUp};