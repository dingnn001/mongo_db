var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;
var doc = {
  firstName: process.argv[2],
  lastName: process.argv[3]
};
mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('docs');
  // You need the information to be inserted and a function that also handles errors
  collection.insert(doc, function(err, data) {
    // handle error
    if (err) throw err;

    // You print the inserted document and not "data"
    console.log(JSON.stringify(doc));
    db.close();
  });
})