console.log("Up and running!");

var cards; var createBoard; var cardElement; var i;
var cardOne; var cardTwo; var cardThree; var cardFour;
var cardsInPlay; var flipCard; var cardId; var checkForMatch;

cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

// Create an array to store the cards in play
cardsInPlay = [];

checkForMatch = function () {
      if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      }
        else {
        console.log("Sorry, try again.");
      }
};

flipCard = function () {

  // Get the data-id of card just flipped and store it.
    cardId = this.getAttribute('data-id');
    console.log(cardId);

  // Add card to array of cards that are in play
    cardsInPlay.push(cards[cardId].rank);

  // Display the image of the card
    this.setAttribute('src', cards[cardId].cardImage);

  // Check to see if two cards have been played
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    checkForMatch();
    //Otherwise empty array
   cardsInPlay = [];  }
};

createBoard=function() {
  // Loop through your cards array to create card elements for your board
  for ( i = 0; i < cards.length; i++) {
    // Create an img element which will be used as a card
    cardElement = document.createElement('img');

    // Set the src attribute to display the back of card image
    cardElement.setAttribute('src', 'images/back.png');

		// Set the card's 'data-id' attribute to be the index of the current element
    // data- attributes are meant to store data about an element that is not tied to a style.
    cardElement.setAttribute('data-id', i);

		// Add an event listener so that when a card is clicked,
    // the function flipCard will be executed
    cardElement.addEventListener('click', flipCard);

    // Append the card to the board
    document.getElementById('game-board').appendChild(cardElement);
  }
}

//Call the flipcard function
createBoard();
