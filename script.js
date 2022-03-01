var userBtn = document.querySelector(".user-btn");
var toggleBtn = document.querySelector(".toggle");
var myBtn = document.querySelector(".my-btn");
var stopBtn = document.querySelector(".my-btn_stop");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");

// ************************
var choose = "teams";
toggleBtn.innerText = choose;
toggleBtn.onclick = () => {
  if (choose === "teams") {
    choose = "nations";
  } else {
    choose = "teams";
  }
  console.log(choose);
  toggleBtn.innerText = choose;
};

myBtn.onclick = () => {
  clear = setInterval(roll, 50);
  myBtn.classList.add("disable");
};

stopBtn.onclick = () => {
  clearInterval(clear);

  console.log("stop");
  myBtn.classList.remove("disable");
};

let users = ["user1.jpg", "user2.jpg", "user3.jpg", "user4.jpg", "user5.jpg"];
let dice = document.querySelectorAll("img");

function roll() {
  let dieOneValue =
    choose === "teams"
      ? Math.floor(Math.random() * 84)
      : Math.floor(Math.random() * 125);
  let dieTwoValue =
    choose === "teams"
      ? Math.floor(Math.random() * 84)
      : Math.floor(Math.random() * 125);
  console.log(dieOneValue, dieTwoValue);
  document
    .querySelector("#die-1")
    .setAttribute("src", `images/${choose}/${dieOneValue}.png`);
  document
    .querySelector("#die-2")
    .setAttribute("src", `images/${choose}/${dieTwoValue}.png`);
  if (dieOneValue == dieTwoValue) {
    console.log("return");
    roll();
  }
}

// **************************

btn1.onclick = () => {
  mido();
};

btn2.onclick = () => {
  zezo();
};

btn3.onclick = () => {
  abdo();
};

btn4.onclick = () => {
  bely();
};

btn5.onclick = () => {
  ahmed();
};

btn6.onclick = () => {
  mido1();
};

btn7.onclick = () => {
  zezo2();
};

btn8.onclick = () => {
  abdo3();
};

btn9.onclick = () => {
  bely4();
};

btn10.onclick = () => {
  ahmed5();
};

function mido() {
  document.querySelector("#user-1").setAttribute("src", users[0]);
}
function zezo() {
  document.querySelector("#user-1").setAttribute("src", users[1]);
}
function abdo() {
  document.querySelector("#user-1").setAttribute("src", users[2]);
}
function bely() {
  document.querySelector("#user-1").setAttribute("src", users[3]);
}
function ahmed() {
  document.querySelector("#user-1").setAttribute("src", users[4]);
}

function mido1() {
  document.querySelector("#user-2").setAttribute("src", users[0]);
}
function zezo2() {
  document.querySelector("#user-2").setAttribute("src", users[1]);
}
function abdo3() {
  document.querySelector("#user-2").setAttribute("src", users[2]);
}
function bely4() {
  document.querySelector("#user-2").setAttribute("src", users[3]);
}
function ahmed5() {
  document.querySelector("#user-2").setAttribute("src", users[4]);
}
