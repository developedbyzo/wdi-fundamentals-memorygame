// console.log("Up and running!")
// alert('Hello, Friends! ')

/* var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; */

var cards = [
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
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  }
]
var cardsInPlay = [cards]
var checkForMatch = function () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    window.alert('You found a match!')
  } else {
    window.alert('Sorry, try again')
  }
};

var flipCard = function (cardId) {
  checkForMatch()
  console.log('User flipped ' + cards[cardId].rank)
  console.log('User flipped ' + cards[cardId].cardImage)
  console.log('User flipped ' + cards[cardId].suit)
}
var cardId = flipCard(0)
flipCard(2)
cardsInPlay.push(cards[cardId]);
