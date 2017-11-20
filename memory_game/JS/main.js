//console.log("Up and running!")
//alert('Hello, Friends! ')

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [cards];
var checkForMatch = function () {
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again")
    }
};
var flipCard = function (cardId) {
    checkForMatch();
    console.log("User flipped " + cards[cardId]);
};
cardsInPlay.push(cards[cardId]);
var cardId = flipCard(0);
             flipCard(2);