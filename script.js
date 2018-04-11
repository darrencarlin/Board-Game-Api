let data;
let app = document.getElementById("app");
let gamesList = document.getElementById("gamesList");
let genresList = document.getElementById("genresList");
let idealList = document.getElementById("idealList");
let playerList = document.getElementById("playerList");

let games = [];
let genres = [];
let ideal = [];
let players = [];
let genresFinal;
let gamesFinal;
let idealFinal;
let playersFinal;

// This is a loop to console.log all games in sample, this will be the basis of any call to adjust the filter. 
// forEach is basically taking the games variable which is an array of objects and doing something with them.
// Usually this is used for arrays with objects inside for simple array use a regualr javascript for loop.

fetch('http://darrencarlin.com/games.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        data.forEach(function (game, index) {

            //console.log(game)
            //console.log(index)

            // In order for us to be able to display cetrain items we can use this syntax
            // This is called dot notation, you can also use square bracks but I find this 
            // easier.

            //console.log(game.name) // Display the name of the game using dot notation.

            //console.log(game["difficulty"]) // Display the difficulty using square brack notation.

            // console.log(game.type) // If the items are in an array it will automatically display the entire array

            // console.log(game.type[3]) // This will display the 3rd index within type

            // These next lines are taking each item (genre, name, idealFor) from each game 
            // and putting them into their own array.

            genres.push(game.genre);
            games.push(game.name);
            ideal.push(game.idealFor);
            players.push(game.players.playersMin);
            players.push(game.players.playersMax);

         
            // Flattening & Sorting arrays (see functions below)

            gamesFinal = flatten(games);
            genresFinal = flattenSort(genres);
            idealFinal = flattenSort(ideal);
            playersFinal = minMax(players);
        });

        // These logs are for testing

        // console.log(gamesFinal);
        // console.log(genresFinal);
        // console.log(idealFinal);
        console.log(playersFinal);

        // These functions are flattening (merging) and sorting (removing duplicates) arrays

        function flatten(arr) {
            return arr.reduce((a, b) => a.concat(b), [])
        }

        function flattenSort(arr) {
            return [...new Set(arr.reduce((a, b) => a.concat(b), []))]
        }

        function minMax(arr) {
            return Math.max(...arr);
        }

        // These loops are for populating the drop down menus in the HTML, we are using template strings which are 
        // called 'back ticks' which are a little more convienet than normal string building.


        for (let i = 0; i < gamesFinal.length; i++) {
            gamesList.innerHTML += `<option value="${gamesFinal[i]}"> ${gamesFinal[i]} </option>`;

        }

        for (let i = 0; i < genresFinal.length; i++) {
            genresList.innerHTML += `<option value="${genresFinal[i]}"> ${genresFinal[i]} </option>`;
        }

        for (let i = 0; i < idealFinal.length; i++) {
            idealList.innerHTML += `<option value="${idealFinal[i]}"> ${idealFinal[i]} </option>`;
        }

        for (let i = 1; i <= playersFinal; i++) {
            playerList.innerHTML += `<option value="${[i]}"> ${[i]} </option>`;
        }

    })
    .catch(function (error) {
        console.log(error.message);
    });