let randomNumber1=Math.floor(Math.random()*6)+1;
let diceNumber1="images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", diceNumber1);

let randomNumber2=Math.floor(Math.random()*6)+1;
let diceNumber2="images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", diceNumber2);

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";

} else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"

} else {
  document.querySelector("h1").innerHTML="Draw."
}



// let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//
//
// let diceImg1Src = document.getElementsByClassName("img1");
//
// if (randomNumber1 === 1) {
//   diceImg1Src = document.getElementsByClassName("img1")[0].src = "images/dice1.png";
//
// } else if (randomNumber1 === 2) {
//   diceImg1Src = document.getElementsByClassName("img1")[0].src = "images/dice2.png";
//
// } else if (randomNumber1 === 3) {
//   diceImg1Src = document.getElementsByClassName("img1")[0].src = "images/dice3.png";
//
// } else if (randomNumber1 === 4) {
//   diceImg1Src = document.getElementsByClassName("img1")[0].src = "images/dice4.png";
//
// } else if (randomNumber1 === 5) {
//   diceImg1Src = document.getElementsByClassName("img1")[0].src = "images/dice5.png";
//
// } else {
//   diceImg1Src = document.getElementsByClassName("img1")[0].src = "images/dice6.png";
// }
//
// let randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// let diceImg1Src2 = document.getElementsByClassName("img2");
//
// if (randomNumber2 === 1) {
//   diceImg1Src2 = document.getElementsByClassName("img2")[0].src = "images/dice1.png";
//
// } else if (randomNumber2 === 2) {
//   diceImg1Src2 = document.getElementsByClassName("img2")[0].src = "images/dice2.png";
//
// } else if (randomNumber2 === 3) {
//   diceImg1Src2 = document.getElementsByClassName("img2")[0].src = "images/dice3.png";
//
// } else if (randomNumber2 === 4) {
//   diceImg1Sr2c = document.getElementsByClassName("img2")[0].src = "images/dice4.png";
//
// } else if (randomNumber2 === 5) {
//   diceImg1Src2 = document.getElementsByClassName("img2")[0].src = "images/dice5.png";
//
// } else {
//   diceImg1Src2 = document.getElementsByClassName("img2")[0].src = "images/dice6.png";
// }
//
// // let diceWinner = document.getElementsByClassName("container")[0];
//
// if (randomNumber1 > randomNumber2) {
//   diceWinner = document.getElementsByTagName("h1")[0].innerHTML = "🚩Player 1 Wins!";
//
// } else if (randomNumber1 < randomNumber2) {
//   diceWinner = document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!🚩";
//
// } else {
//   diceWinner = document.getElementsByTagName("h1")[0].textContent = "Draw!";
// }
