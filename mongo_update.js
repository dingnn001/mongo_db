var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;
var doc = {
      "name": "Tina",
      "age": 30,
      "username": "tinatime"
};
mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('users');
  // You need the information to be inserted and a function that also handles errors
  collection.update(doc, {$set:{"age":40}}, function(err, data) {
    // handle error
    if (err) throw err;

    // You print the inserted document and not "data"
    console.log(JSON.stringify(doc));
    db.close();
  });
})