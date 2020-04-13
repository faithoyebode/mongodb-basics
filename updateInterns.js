const updateInterns = (db, dbo) => {
    let myquery = {movie: "The Banker", year: "2020", rating: 8};
    let newvalues = {$set: {movie: "Money Heist", year: "2020", rating: 9}};
    dbo.collection('myMovies').updateOne(myquery, newvalues, function(err, res){
        if (err) throw err;
        console.log("1 document updated");
        dbo.collection('myMovies').find({}).toArray (function(err, res){
            if (err) throw err;
            console.log(res);
            db.close();
        });
    });
}

module.exports = updateInterns;