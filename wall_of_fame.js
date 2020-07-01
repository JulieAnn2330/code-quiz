var playerInput = document.querySelector("#player-text");
var playerForm = document.querySelector("#player-form");
var playerList = document.querySelector("#player-list");
var scoreCountSpan = document.querySelector("#score-count");
var players = ["name + quiz.score", "Learn CSS", "Learn JavaScript"];

renderPlayers();
function renderPlayers() {
  // Clear todoList element and update todoCountSpan
  playerList.innerHTML = "";
  scoreCountSpan.textContent = players.length;

  // Render a new li for each todo
  for (var i = 0; i < players.length; i++) {
    var highScore = players[i];

    var li = document.createElement("li");
    li.textContent = highScore;
    playerList.appendChild(li);
  
    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    playerList.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedPlayers = JSON.parse(localStorage.getItem("scores"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedPlayers !== null) {
    players = storedPlayers;
  }

  // Render todos to the DOM
  renderPlayers();
}

function storePlayers() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("scores", JSON.stringify(players));
}

// When form is submitted...
playerForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var playerText = playerInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (playerText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  players.push(playerText);
  playerInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storePlayers();
  renderPlayers();
});

// When a element inside of the todoList is clicked...
playerList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    players.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storePlayers();
    renderPlayers();
  }
});
