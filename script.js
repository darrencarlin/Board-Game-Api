/*****************************************************************************/
/*                            VARIABLES                                      */
/*****************************************************************************/

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
let gameArr = [];
let endpoint = "https://www.darrencarlin.com/games.json";

/*****************************************************************************/
/*                            FUNCTIONS                                      */
/*****************************************************************************/

// Flatten / De-duplicate Arrays.

let flattenSort = (arr) => {
    return [...new Set(arr.reduce((a, b) => a.concat(b), []))]
}

// Find max player Count off all games.

let findMax = (arr) => {
    return [Math.max(...arr)]
}

// Create and populate options for select menus.
// *numberedList is used for player 2 - 'max player' 

let populateOption = (jsArr, htmlEl, numberedList = false) => {

    if (numberedList) {
        for (let i = 2; i <= jsArr; i++) {
            htmlEl.innerHTML += `<option value="${i}"> ${i} </option>`;
        }
    } else {
        for (let i of jsArr) {
            if (i === "") { // Incase JSON contains an empty string 
                continue // Don't include it
            }
            htmlEl.innerHTML += `<option value="${i}"> ${i} </option>`;
        }
    }
}

// AJAX Call 

fetch(endpoint)
    .then(response => response.json())
    .then(data => {

        data.forEach((game, index) => { 

            gameArr.push(game); // Storing entire JSON data.

            games.push(game.name); // Storing Names

            genres.push(game.genre); // Storing Genres
            genres = flattenSort(genres);

            ideal.push(game.idealFor); // Storing Ideal For
            ideal = flattenSort(ideal);

            players.push(game.players.playersMax); // Storing Max Players
            players = findMax(players);

            mechanics.push(game.mechanics); // Storing Mechanics
            mechanics = flattenSort(mechanics);

            difficulty.push(game.difficulty); // Storing Difficulty 
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
