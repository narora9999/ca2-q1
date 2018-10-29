var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDB';

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('EmployeeCollection').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 