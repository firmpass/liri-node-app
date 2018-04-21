require("dotenv").config();


var keys = require("./keys.js");
// var Twitter = require('twitter');
var request = require('request');
// var spotify = require('spotify');

// console.log(keys);


var a = process.argv[2];


if (a === "movie-this") {
  console.log("Show movie!");
}
else {
  console.log("Use movie-this to search for movie.");
}
var movieName = process.argv[3];

request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

  // If there were no errors and the response code was 200 (i.e. the request was successful)...
  if (!error && response.statusCode === 200) {

    // Then we print out the movie data.
    console.log("==============================================");
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year Released: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).Rated);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("==============================================");
  } else {
  //   console.log(request("http://www.omdbapi.com/?t=Mr+Nobody&y=&plot=short&apikey=trilogy"));
  // }
    // console.log(JSON.parse(body));  
  }
});


 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data' 
// });

// Basic Node application for requesting data from the OMDB website
// Here we incorporate the "request" npm package

// We then run the request module on a URL with a JSON
