var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db) {
  if (err) throw err;
    // db gives access to the database
  db.collection('parrots').find({
    age: {
      // greater than integer, see resources "Find"
      $gt: parseInt(process.argv[2])
    }
  }).toArray(function(err, documents) {
    // Here is where we decide what to do with the query results
    if (err) throw err;
    console.log(documents);
    // Always close the connection after you get what you need
    db.close();
  });
})