/*****************************************************************************/
/*                            VARIABLES                                      */
/*****************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    // let app = document.getElementById("app");
    // let gamesList = document.getElementById("gamesList");
    // let genresList = document.getElementById("genresList");
    // let idealList = document.getElementById("idealList");
    // let playerList = document.getElementById("playerList");
    // let mechanicsList = document.getElementById("mechanicsList");





    // let games = [];
    // let genres = [];
    // let ideal = [];
    // let players = [];
    // let mechanics = [];
    // let difficulty = [];
    // let gameArr = [];
    // let endpoint = "https://www.darrencarlin.com/games.json";

    // Elements 
    // Initialize Firebase

    let database = firebase.database();

    let tableContainer = document.getElementById("viewGames");
    tableContainer.style.display = "none"
    let table = document.getElementById("viewGamesTable");
    let viewGamesBtn = document.getElementById("viewGamesBtn").addEventListener("click", function () {
        viewGames();
        displayGames();
    });
    let addGamesBtn = document.getElementById("addGamesBtn").addEventListener("click", function () {
        addGames();
    });

    // Form Inputs 
    let form = document.getElementById("formAddGames");
    let formName = document.getElementById("formName");
    let formDescription = document.getElementById("formDescription");
    let formImage = document.getElementById("formImage");
    let formType = document.getElementById("formType");
    let formGenre = document.getElementById("formGenre");
    let formIdeal = document.getElementById("formIdeal");
    let formPlayersIdeal = document.getElementById("formPlayersIdeal");
    let formPlayersMinimum = document.getElementById("formPlayersMinimum");
    let formPlayersMax = document.getElementById("formPlayersMax");
    let formAge = document.getElementById("formAge");
    let formDifficulty = document.getElementById("formDifficulty");
    let formSetupTime = document.getElementById("formSetupTime");
    let formPlayTime = document.getElementById("formPlayTime");
    let formPublishDate = document.getElementById("formPublishDate");
    let formPublisher = document.getElementById("formPublisher");
    let formExpansion = document.getElementById("formExpansion");
    let formLocation = document.getElementById("formLocation");
    let submitForm = document.getElementById("formSubmit");

    submitForm.addEventListener("click", function () {
        addGame();
    });


    let games = [];

    let displayGames = () => {
       
        let data = firebase.database().ref();
        data.on("value", function (snapshot) {
            table.innerHTML = `<tr>
            <th>Name</th>
            <th>Location</th>
            <th>Edit</th>
            <th>Delete</th>
         </tr>`;
            snapshot.forEach(function (game) {
                table.innerHTML += `<tr id="${game.val().name}">
                                    <td>${game.val().name}</td>
                                    <td>${game.val().location}</td>
                                    <td class="edit"><i class="far fa-edit"></i></td>
                                    <td class="delete"><i class="far fa-trash-alt"></i></td>
                                </tr>`
            });

        });

    }

    let addGames = () => {
        tableContainer.style.display = "none";
        form.style.display = "grid";
    }

    let viewGames = () => {
        form.style.display = "none";
        tableContainer.style.display = "block";



    }

    document.addEventListener('click', function (evt) {

        if (evt.target.className == 'far fa-trash-alt') {
            deleteGame(evt.target.parentNode.parentNode.id);
        }
    })


    let deleteGame = (element) => {
        console.log(element)
        let game = database.ref().child(element);
        let del = confirm("Press OK to delete");
        if (del == true) {
            game.remove();
            console.log("deleted")
        } else {
            console.log("cancelled")
        }

        
    }




    function addGame() {



        let firebaseKey = firebase.database().ref().child("board-game-tabletop").push().key;

        let data = {
            id: firebaseKey,
            name: formName.value,
            description: formDescription.value,
            image: `${formImage.value}.png`.toLowerCase(),
            type: formType.value.split(", "),
            genre: formGenre.value.split(", "),
            idealFor: formIdeal.value.split(", "),
            playersIdeal: parseInt(formPlayersIdeal.value),
            playersMin: parseInt(formPlayersMinimum.value),
            playersMax: parseInt(formPlayersMax.value),
            age: parseInt(formAge.value),
            difficulty: formDifficulty.value,
            setupTime: parseInt(formSetupTime.value),
            playTime: parseInt(formPlayTime.value),
            yearPublished: formPublishDate.value,
            publisher: formPublisher.value.split(", "),
            rank: 0,
            rating: 0,
            expansion: stringToBool(formExpansion.value),
            location: formLocation.value

        }
        let updates = {};
        updates['/' + formName.value] = data;
        submitForm.innerHTML = "Game Added!";
        setTimeout(() => {
            submitForm.innerHTML = "Add Game";
        }, 3000);
        form.reset();
        return firebase.database().ref().update(updates);

    }




    /*****************************************************************************/
    /*                            FUNCTIONS                                      */
    /*****************************************************************************/

    // Convert string to boolean

    function stringToBool(str) {
        return ((str === "True") || (str === "true")) ? true : false;
    }

    // // Flatten / De-duplicate Arrays.

    // let flattenSort = (arr) => {
    //     return [...new Set(arr.reduce((a, b) => a.concat(b), []))];
    // }


    // // Find max player Count off all games.

    // let findMax = (arr) => {
    //     return [Math.max(...arr)];
    // }

    // // Remove empty strings from Array 

    // let removeEmpty = (arr) => {
    //     arr.filter(str => str.trim() != '');
    // };


    // // Create and populate options for select menus.
    // // *numberedList is used for player 2 - 'max player' 

    // let populateOption = (jsArr, htmlEl, numberedList = false) => {

    //     if (numberedList) {
    //         for (let i = 2; i <= jsArr; i++) {
    //             htmlEl.innerHTML += `<option value="${i}"> ${i} </option>`;
    //         }
    //     } else {
    //         for (let i of jsArr) {
    //             htmlEl.innerHTML += `<option value="${i}"> ${i} </option>`;
    //         }
    //     }
    // }

    // const gamez = [];

    // fetch(endpoint)
    //     .then(blob => blob.json())
    //     .then(data => gamez.push(...data));

    // gamez.forEach((game) => {
    //     games.push(game.name);
    // })

    // function findMatches(wordToMatch, gamez) {
    //     return gamez.filter(item => {
    //         const regex = new RegExp(wordToMatch, 'gi');
    //         return item.name.match(regex)
    //     })
    // }

    // function displayMatches() {
    //     const matchArray = findMatches(this.value, gamez)
    //     const html = matchArray.map(item => {
    //         return `
    //         <li>
    //             ${item.name}
    //         </li>
    //         `;
    //     }).join('');
    //     suggestions.innerHTML = html;
    // }

    // const searchInput = document.querySelector('.search-bar');
    // const suggestions = document.querySelector('.suggestions');

    // searchInput.addEventListener('change', displayMatches);
    // searchInput.addEventListener('keyup', displayMatches);

    // // AJAX Call 
    // let gamez = [];
    // fetch(endpoint)
    //     .then(response => response.json())
    //     //  .then(jsonData => gamez.push(...jsonData))
    //     .then(data => data.forEach((game, index) => {

    //         gameArr.push(game); // Storing entire JSON data.

    //         games.push(game.name); // Storing Names

    //         genres.push(game.genre); // Storing Genres
    //         genres = (flattenSort(genres));

    //         ideal.push(game.idealFor); // Storing Ideal For
    //         ideal = flattenSort(ideal);

    //         players.push(game.players.playersMax); // Storing Max Players
    //         players = findMax(players);

    //         mechanics.push(game.mechanics); // Storing Mechanics
    //         mechanics = flattenSort(mechanics);

    //         difficulty.push(game.difficulty); // Storing Difficulty 
    //         difficulty = flattenSort(difficulty);

    //         populateOption(games, gamesList);
    //         populateOption(genres, genresList);
    //         populateOption(ideal, idealList);
    //         populateOption(mechanics, mechanicsList);
    //         populateOption(difficulty, difficultyList);
    //         populateOption(players, playerList, true);


    //     }))
    //     .catch(function (error) {
    //         console.log(error);
    //     });

});