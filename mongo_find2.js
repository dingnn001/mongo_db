var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db) {
  if (err) throw err;
    // db gives access to the database
  db.collection('parrots').find({
    age: {
      $gt: parseInt(process.argv[2])
    }
  }, {
    name: 1,
    age: 1,
    _id: 0

  }).toArray(function(err, documents) {
    // Here is where we decide what to do with the query results
    if (err) throw err;
    console.log(documents);
    db.close();
  });
})