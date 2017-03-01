var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;
mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('prices');
  // You need the information to be inserted and a function that also handles errors
  collection.aggregate([
    {$match: {size: process.argv[2]}},
    { $group: {
      _id: 'average', 
      average: {
        $avg: '$price'
      }
    }}
    ]).toArray(function(err, result) {
    // handle error
    if (err) throw err;
    if (!result.length) {
      throw new Error('No results found');
    }
    var sol = result[0];
    console.log(Number(sol.average).toFixed(2));
    db.close();
  });
})