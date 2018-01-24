console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);

var cards;
var cardOne;
var cardTwo;
var cardThree;
var cardFour;
var cardsInPlay;

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

cardOne = cards[0];
cardsInPlay.push(cardOne);

cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay);

if (cardsInPlay.length === 2) {

    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    }
else alert("Sorry try again!");

};
