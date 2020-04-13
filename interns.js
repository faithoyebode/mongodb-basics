
const internCollection = (dbo) => {
    let movies = [
        {movie: "The Banker", year: "2020", rating: 8},
        {movie: "Bad Boys", year: "2020", rating: 7},
        {movie: "The Hunt", year: "2020", rating: 7},
        {movie: "Bloodshot", year: "2020", rating: 7.5},
        {movie: "First Cow", year: "2020", rating: 6.5}
    ];
    dbo.collection('myMovies').insertMany(movies, function(err, res) {
        if (err) throw err;
        console.log("collection created");   
    }); 
    
}

module.exports = internCollection;
