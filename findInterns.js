const findInterns = (dbo) => {
    dbo.collection('myMovies').findOne({}, function(err, res){
        if (err) throw err;
        console.log("first document found");
    });
    let query = {rating: 7};
    dbo.collection('myMovies').find(query).toArray(function(err, res){
        if (err) throw err;
        console.log("movies with rating of 7");
    });
    dbo.collection('myMovies').find({}, {projection: {_id: 0, movie: 1}}).toArray(function(err, res){
        if (err) throw err;
        console.log(res);
    });
};

module.exports = findInterns;
