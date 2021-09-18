var url = "mongodb://priya_tech:priya.2501@cluster0-shard-00-00.d2cbw.mongodb.net:27017,cluster0-shard-00-01.d2cbw.mongodb.net:27017,cluster0-shard-00-02.d2cbw.mongodb.net:27017/club_website?ssl=true&replicaSet=atlas-znyh7x-shard-0&authSource=admin&retryWrites=true&w=majority";
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var assert = require('assert');

function connect(callback) {
    MongoClient.connect(url, callback);
};

//Cache the mongodb connection
var dbCache = {};
connect(function (err, client) {
    if (!err) {
        console.log("Connection with mongodb successful");
        dbCache.db = client.db('club_website');
    } else {
        console.log("Error while connecting to Mongo DB " + err);
        dbCache = {};
    }
});

module.exports.getDb = function() {
    return dbCache.db;
}

module.exports.getMongodb = function() {
    return mongodb;    
}

module.exports.connect = connect;

module.exports.ObjectID = mongodb.ObjectID;
