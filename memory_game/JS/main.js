// console.log("Up and running!")
// alert('Hello, Friends! ')

/* var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; */

var cards = [
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  }
]
var cardsInPlay = []
var checkForMatch = function () {
//   this.cardImage.setAttribute(src)
  if (cardsInPlay.length === 2) {
  }
  if (cardsInPlay[0] === cardsInPlay[1]) {
    window.alert('You found a match!')
  } else {
    window.alert('Sorry, try again')
  }
}
var flipCard = function () {
  console.log('flipCard() ran')
  var cardId = this.getAttribute('data-id')
//   cardId.getAttribute('data-id')
  this.setAttribute('src', cards[cardId].cardImage)
  checkForMatch()
  cardsInPlay.push(cards[cardId])
  console.log('User flipped ' + cards[cardId].rank)
  console.log('User flipped ' + cards[cardId].cardImage)
  console.log('User flipped ' + cards[cardId].suit)
}
function createBoard () {
  var gameBoard = document.getElementById('game-board')
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img')
    cardElement.setAttribute('src', 'images/back.png')
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener('click', flipCard)
    gameBoard.appendChild(cardElement)
  }
}
/*var cardId = flipCard(0)
flipCard(2)*/
createBoard()
