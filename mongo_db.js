var mongoClient = require('mongodb').MongoClient;
var worldclassdev = 'mongodb://localhost:27017/mydb';
var internCollection = require('./interns.js');
var findInterns = require('./findInterns.js');
var updateInterns = require('./updateInterns.js');

mongoClient.connect(worldclassdev, function(err, db){
    if(err) throw err;
    console.log('Database created by worldclassdev');
    var dbo = db.db("mydb");
    
    internCollection(dbo);
    dbo.collection('myMovies').drop({}, function(err, delOK){
        if (err) throw err;
        if (delOK){
            console.log('collection deleted');
            db.close();
        }
    });
    findInterns(dbo);
    updateInterns(db, dbo);
    
});