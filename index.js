var x = document.getElementById("player");
var playButton = document.getElementById("pbtn");
var container = document.getElementById("myContainer");
var s_container = document.getElementById("soccerContainer");



var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var ballImg = document.getElementById("ballImg");



function kick() {
  const ball = document.getElementById("ballImg");
  ball.style.transform = "translateX(100px)";
}


function playAudio() {
  x.play();
  container.style.display = "none";
  s_container.style.display = "flex";
}

function AlertFunc() {
  alert("Key");
}

function Func() {
  console.log(player1.clientLeft.toString());
}

Func();

function getCursor(event) {
  let x = event.clientX;
  let y = event.clientY;
  let _position = `X: ${x}<br>Y: ${y}`;

  console.log(_position);

  const infoElement = document.getElementById('player1');
  infoElement.innerHTML = _position;
  infoElement.style.top = y + "px";
  infoElement.style.left = (x + 20) + "px";

}



function Pushing() {


  // var divElement = document.getElementById("myDiv");

  // // Get the coordinates of the div element
  // var coordinates = divElement.getBoundingClientRect();

  // // Log the coordinates to the console
  // console.log("x: " + coordinates.left + ", y: " + coordinates.top);

}


// document.addEventListener("keydown", function (event) {
//     let str1 = player1.style.top;
//     let mainstr = str1.split("p");
//     let digit1 = parseInt(mainstr[0]);
//     if (event.key === "w") {
//         player1.style.top = digit1 - 10 + "px";
//       } else if (event.key === "a") {
//         player1.style.left = digit1 - 10 + "px";
//       } else if (event.key === "s") {
//         player1.style.top = digit1 + 10 + "px";
//       } else if (event.key === "d") {
//         player1.style.left = digit1 + 10 + "px";
//       }
// });

const keyDict = {};
const Player = {
  el: document.querySelector("#player1"),
  x: 200,
  y: 340,
  speed: 3,
  move() {
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
};

const updateKeyDict = (ev) => {
  const k = ev.code;
  if (/^Key[WASD]/.test(k)) { // If is "KeyW,A,S,D" key
    ev.preventDefault();
    keyDict[k] = ev.type === "keydown"; // set boolean true / false
  }
};

const update = () => {
  // Determine move distance to account diagonal move: 1/Math.sqrt(2) = ~0.707
  let dist =
    keyDict.KeyW && (keyDict.KeyA || keyDict.KeyD) ||
      keyDict.KeyS && (keyDict.KeyA || keyDict.KeyD) ? 0.707 : 1;

  dist *= Player.speed;

  if (keyDict.KeyA) Player.x -= dist;
  if (keyDict.KeyW) Player.y -= dist;
  if (keyDict.KeyD) Player.x += dist;
  if (keyDict.KeyS) Player.y += dist;
  Player.move();
}

document.addEventListener('keydown', updateKeyDict);
document.addEventListener('keyup', updateKeyDict);

(function engine() {
  update();
  window.requestAnimationFrame(engine);
}());




const keyDict2 = {};
const Player2 = {
  el: document.querySelector("#player2"),
  x: 1150,
  y: 340,
  speed: 3,
  move() {
    this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
};

const updateKeyDict2 = (ev) => {
  const k = ev.code;
  if (/^Arrow\w+/.test(k)) { // If is arrow
    ev.preventDefault();
    keyDict2[k] = ev.type === "keydown"; // set boolean true / false
  }
};

const update2 = () => {
  // Determine move distance to account diagonal move: 1/Math.sqrt(2) = ~0.707
  let dist =
    keyDict2.ArrowUp && (keyDict2.ArrowLeft || keyDict2.ArrowRight) ||
      keyDict2.ArrowDown && (keyDict2.ArrowLeft || keyDict2.ArrowRight) ? 0.707 : 1;

  dist *= Player2.speed;

  if (keyDict2.ArrowLeft) Player2.x -= dist;
  if (keyDict2.ArrowUp) Player2.y -= dist;
  if (keyDict2.ArrowRight) Player2.x += dist;
  if (keyDict2.ArrowDown) Player2.y += dist;
  Player2.move();
}

document.addEventListener('keydown', updateKeyDict2);
document.addEventListener('keyup', updateKeyDict2);

(function engine2() {
  update2();
  window.requestAnimationFrame(engine2);
}());



