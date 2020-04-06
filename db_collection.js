var mongoClient = require('mongodb').MongoClient;
var worldclassdev = 'mongodb://localhost:27017/mydb';

mongoClient.connect(worldclassdev, function(err, db){
    if(err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection('interns').insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("Interns collection created"); 
        db.close();  
    }); 
});