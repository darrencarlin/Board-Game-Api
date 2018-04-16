
let app = document.getElementById("app");

let gamesList = document.getElementById("gamesList"); 
let genresList = document.getElementById("genresList");
let idealList = document.getElementById("idealList");
let playerList = document.getElementById("playerList");
let mechanicsList = document.getElementById("mechanicsList");
let difficultyList = document.getElementById("difficultyList");

let games = [];
let genres = [];
let ideal = [];
let players = [];
let mechanics = [];
let difficulty = [];
let gameData = [];


let flatten = (arr) => {
    return arr.reduce((a, b) => a.concat(b), [])
}

let flattenSort = (arr) => {
    return [...new Set(arr.reduce((a, b) => a.concat(b), []))]
}

let findMax = (arr) => {
   return [Math.max(...arr)]
}

let pushArr = (arr, json) => {
     arr.push(json)
     arr = flattenSort(arr)
     return arr
}

let populateOption = (js, html, numberedList = false) => {

    if (numberedList) {
        for (let i = 2; i <= js; i++) {
            html.innerHTML += `<option value="${i}"> ${i} </option>`;
        }
    } else {
        for (let i of js) {
            html.innerHTML += `<option value="${i}"> ${i} </option>`;
        }
    }

}

fetch('https://darrencarlin.com/games.json')
    .then(response => response.json())
    .then(data => gameData = data.clone())
    .catch(err => console.log(err))

        gameData.forEach(function (game, index) {
            
            games.push(game.name);

            genres.push(game.genre);
            genres = flattenSort(genres);

            ideal.push(game.idealFor);
            ideal = flattenSort(ideal);

            players.push(game.players.playersMax);
            players = findMax(players);

            mechanics.push(game.mechanics);
            mechanics = flattenSort(mechanics);

            difficulty.push(game.difficulty);
            difficulty = flattenSort(difficulty);

        });

        populateOption(games, gamesList);
        populateOption(genres, genresList);
        populateOption(ideal, idealList);
        populateOption(mechanics, mechanicsList);
        populateOption(difficulty, difficultyList);
        populateOption(players, playerList, true);
