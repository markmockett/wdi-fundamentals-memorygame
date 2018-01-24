console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

var cards;
var cardOne;
var cardTwo;
var cardThree;
var cardFour;
var cardsInPlay;
var flipCard;
var cardId;
var checkForMatch;

cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];

checkForMatch = function () {
      if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
    }
};

flipCard = function (cardId) {

  // Display the card the user just flipped in the console.
  console.log("User flipped " + cards[cardId]);

  // Add card to array of cards that are in play
  cardsInPlay.push(cards[cardId]);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
  }
};

flipCard(0);
flipCard(2);
