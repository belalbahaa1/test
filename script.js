var userBtn = document.querySelector(".user-btn");
var myBtn = document.querySelector(".my-btn");
var stopBtn = document.querySelector(".my-btn_stop");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

// ************************

myBtn.onclick = () => {
  clear = setInterval(roll, 100);
  myBtn.classList.add("disable");
};

stopBtn.onclick = () => {
  clearInterval(clear);
  console.log("stop");
  myBtn.classList.remove("disable");
};

let images = [
  "images/team1.png",
  "images/team2.png",
  "images/team3.png",
  "images/team4.png",
  "images/team5.png",
  "images/team6.png",
  "images/team7.png",
  "images/team8.png",
  "images/team9.png",
  "images/team10.png",
  "images/team11.png",
  "images/team12.png",
  "images/team13.png",
  "images/team14.png",
  "images/team15.png",
  "images/team16.png",
  "images/team17.png",
  "images/team18.png",
  "images/team19.png",
  "images/team20.png",
  "images/team21.png",
  "images/team22.png",
  "images/team23.png",
  "images/team24.png",
  "images/team25.png",
  "images/team26.png",
  "images/team27.png",
  "images/team28.png",
  "images/team29.png",
  "images/team30.png",
  "images/team31.png",
  "images/team32.png",
  "images/team34.png",
  "images/team35.png",
  "images/team36.png",
  "images/team37.jpg",
  "images/team38.png",
  "images/team39.png",
  "images/team40.png",
];

let users = ["user1.jpg", "user2.jpg", "user3.jpg", "user4.jpg"];
let dice = document.querySelectorAll("img");

function roll() {
  let dieOneValue = Math.floor(Math.random() * 39);
  let dieTwoValue = Math.floor(Math.random() * 39);
  document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
  document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
  console.log(dieOneValue, dieTwoValue);
  if (dieOneValue == dieTwoValue) {
    console.log("return");
    roll();
  }
}

// **************************

// btn1.onclick = () => {
//   mido();
// };

// btn2.onclick = () => {
//   zezo();
// };

// btn3.onclick = () => {
//   abdo();
// };

// btn4.onclick = () => {
//   bely();
// };

// btn5.onclick = () => {
//   ahmed();
// };

// function mido() {
//   document.querySelector("#user-1").setAttribute("src", users[0]);
// }
// function zezo() {
//   document.querySelector("#user-1").setAttribute("src", users[1]);
// }
// function abdo() {
//   document.querySelector("#user-1").setAttribute("src", users[2]);
// }
// function bely() {
//   document.querySelector("#user-1").setAttribute("src", users[3]);
// }
// function ahmed() {
//   document.querySelector("#user-1").setAttribute("src", users[4]);
// }
