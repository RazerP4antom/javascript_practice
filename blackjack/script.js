let max = 11;
let min = 1;

let cards = [];
let sum = 0;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "Sarthak",
  chips: 145 
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let hasBlackJack = false;
let isAlive = false;

let message = "";

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  sum += firstCard + secondCard;
  cards.push(firstCard, secondCard);
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards:";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += " " + cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 21) {
    message = "Do you want to draw a new card ?";
  } else if (sum === 21) {
    message = "Wohooo! You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're out of the game !";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomNumber();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
}



