var mongodb = require('./MongodDbUtil');

module.exports.find = function(collectionName, callback){
    var db = mongodb.getDb();
    var collection = db.collection(collectionName);

    collection.find().toArray(function(err, res){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, res);
        }
    });
};

module.exports.getByQuery = function(query, collectionName, callback){
    var db = mongodb.getDb();
    var collection = db.collection(collectionName);

    collection.findOne(query, function(err, res){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, res);
        }
    });
};

