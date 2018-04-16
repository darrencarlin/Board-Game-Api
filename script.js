
let app = document.getElementById("app");

let gamesList = document.getElementById("gamesList");
let genresList = document.getElementById("genresList");
let idealList = document.getElementById("idealList");
let playerList = document.getElementById("playerList");
let mechanicsList = document.getElementById("mechanicsList");

let games = [];
let genres = [];
let ideal = [];
let players = [];
let mechanics = [];
let difficulty = [];
let data;
let daz = [];
let test;

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

function reqListener() {
  var data = JSON.parse(this.responseText);
  console.log(data);
  test = data;
}

function reqError(err) {
  console.log('Fetch Error :-S', err);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.onerror = reqError;
oReq.open('get', 'https://darrencarlin.com/games.json', true);
oReq.send();

fetch('https://darrencarlin.com/games.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        data.forEach(function (game, index) {
            
            daz.push(game);
         
        
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

    })
    .catch(function (error) {
        console.log(error);
    });
    console.log(daz)
    console.log(test)
