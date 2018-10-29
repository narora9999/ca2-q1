var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/Employees';
var str = "";

app.route('/Employeeid').get(function(req, res) {
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('EmployeeCollection');
       var cursor = collection.find({});
       str = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "    Employee id  " + item.Employeeid + "</br>";
           }
       }, function(err) {
           res.send(str);
           db.close();
          }
       );
   });
});
var server = app.listen(8080, function() {});