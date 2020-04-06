var mongoClient = require('mongodb').MongoClient;
var worldclassdev = 'mongodb://localhost:27017/mydb';

mongoClient.connect(worldclassdev, function(err, db){
    if(err) throw err;
    console.log('Database created by worldclassdev');
    db.close();  
});