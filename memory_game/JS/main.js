//console.log("Up and running!")
//alert('Hello, Friends! ')

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [cardOne, cardTwo];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if(cardsInPlay.length === 2) {
    alert("You found a match!");
}else if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("Sorry, try again")
}



/* var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardTwo = cards[1];
var cardsInPlay = [cardOne, cardTwo];
cardsInPlay.push(cardOne || cardTwo);

if(cardsInPlay.length === 2) {
    alert("You found a match!")
}else if(cardsInPlay[0] === cardsInPlay[2]) {
    alert("Sorry, try again.")
}
console.log("User flipped " + cardsInPlay);*/