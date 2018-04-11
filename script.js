let games =
    [{
        "id": 98,
        "name": "Dead Of Winter",
        "description": "Dead of Winter: A Crossroads Game, the first game in this series, puts 2-5 players in a small, weakened colony of survivors in a world where most of humanity is either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.",
        "image": "http://www.tabletop.com/images/games/deadofwinter.jpg",
        "type": ["Board", "Card", "Dice", "Co-operative", "Bluffing", "Storytelling", "Voting", "Trading"],
        "genre": ["Zombie", "Survival", "Horror", "Post-Apocalyptic"],
        "idealFor": ["Groups"],
        "players": {
            "playersIdeal": 4,
            "playersMin": 2,
            "playersMax": 5
        },
        "age": 12,
        "difficulty": "Medium",
        "time": {
            "setupTime": 5,
            "playTime": 60
        },
        "yearPublished": 2014,
        "publisher": ["Plaid Hat Games"],
        "rank": 0,
        "rating": 0,
        "location": "Cork"
    }, {
        "id": 98,
        "name": "Dead Of Winter Expansion",
        "description": "Dead of Winter: A Crossroads Game, the first game in this series, puts 2-5 players in a small, weakened colony of survivors in a world where most of humanity is either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.",
        "image": "http://www.tabletop.com/images/games/deadofwinter.jpg",
        "type": ["Board", "Card", "Dice", "Co-operative", "Bluffing", "Storytelling", "Voting", "Trading"],
        "genre": ["Zombie", "Survival", "Horror", "Post-Apocalyptic"],
        "idealFor": ["Groups"],
        "players": {
            "playersIdeal": 4,
            "playersMin": 2,
            "playersMax": 5
        },
        "age": 12,
        "difficulty": "Medium",
        "time": {
            "setupTime": 5,
            "playTime": 60
        },
        "yearPublished": 2014,
        "publisher": ["Plaid Hat Games"],
        "rank": 0,
        "rating": 0,
        "location": "Cork"
    }, {
        "id": 98,
        "name": "Dead Of Winter Expansion 2",
        "description": "Dead of Winter: A Crossroads Game, the first game in this series, puts 2-5 players in a small, weakened colony of survivors in a world where most of humanity is either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.",
        "image": "http://www.tabletop.com/images/games/deadofwinter.jpg",
        "type": ["Board", "Card", "Dice", "Co-operative", "Bluffing", "Storytelling", "Voting", "Trading"],
        "genre": ["Zombie", "Survival", "Horror", "Post-Apocalyptic"],
        "idealFor": ["Groups"],
        "players": {
            "playersIdeal": 4,
            "playersMin": 2,
            "playersMax": 5
        },
        "age": 12,
        "difficulty": "Medium",
        "time": {
            "setupTime": 5,
            "playTime": 60
        },
        "yearPublished": 2014,
        "publisher": ["Plaid Hat Games"],
        "rank": 0,
        "rating": 0,
        "location": "Cork"
    }, {
        "id": 98,
        "name": "Dead Of Winter Expansion 2",
        "description": "Dead of Winter: A Crossroads Game, the first game in this series, puts 2-5 players in a small, weakened colony of survivors in a world where most of humanity is either dead or diseased, flesh-craving monsters. Each player leads a faction of survivors with dozens of different characters in the game.",
        "image": "http://www.tabletop.com/images/games/deadofwinter.jpg",
        "type": ["Board", "Card", "Dice", "Co-operative", "Bluffing", "Storytelling", "Voting", "Trading"],
        "genre": ["Zombie", "Survival", "Horror", "Post-Apocalyptic"],
        "idealFor": ["Groups"],
        "players": {
            "playersIdeal": 4,
            "playersMin": 2,
            "playersMax": 5
        },
        "age": 12,
        "difficulty": "Medium",
        "time": {
            "setupTime": 5,
            "playTime": 60
        },
        "yearPublished": 2014,
        "publisher": ["Plaid Hat Games"],
        "rank": 0,
        "rating": 0,
        "location": "Cork"
    }]

let app = document.getElementById("app");
let gamesList = document.getElementById("gamesList");
let genresList = document.getElementById("genresList");

// This is a loop to console.log all games in sample, this will be the basis of any call to adjust the filter. 
// forEach is basically taking the games variable which is an array of objects and doing something with them.
// Usually this is used for arrays with objects inside for simple array use a regualr javascript for loop.


games.forEach(function (game, index) {

    //console.log(game)
    //console.log(index)

    // In order for us to be able to display cetrain items we can use this syntax
    // This is called dot notation, you can also use square bracks but I find this 
    // easier.

    //console.log(game.name) // Display the name of the game using dot notation.

    // console.log(game["difficulty"]) // Display the difficulty using square brack notation.

    // console.log(game.type) // If the items are in an array it will automatically display the entire array

    // console.log(game.type[3]) // This will display the 3rd index within type


    var games = game.name; // This is creating an array of all the games in the json array of objects
    var genres = game.genre; // This is creating an array of all the genres in the json array of objects

});

for (let i = 0; i < games.length; i++) {
    let opt = games[i].name;
    gamesList.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

for (let i = 0; i < games.length; i++) {
    let genres = games[i].genre;
    genresList.innerHTML += "<option value=\"" + genres[i] + "\">" + genres[i] + "</option>";
}







