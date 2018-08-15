var canvas = document.getElementById("draw");
var pressed = false;
var lineColor;
var preX = 0;
var preY = 0;
var curX = 0;
var curY = 0;

// get canvas 2D context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

canvas.addEventListener("mousemove", draw); // only draw when pressed is true
canvas.addEventListener("mousedown", drawStart); // set pressed to true
canvas.addEventListener("mouseup", drawStop); // set pressed to false
canvas.addEventListener("mouseout", drawStop); // set pressed to false

document.querySelector("input").addEventListener("input", function(e) {
  changeColor();
});

var pos = { x: 0, y: 0 };

// get current mouse position
function getCurrentXPosition(event) {
  return event.clientX - canvas.offsetLeft;
}

function getCurrentYPosition(event) {
  return event.clientY - canvas.offsetTop;
}

function drawStop(event) {
  pressed = false;
}

function drawStart(event) {
  pressed = true;
  setPosition(event);
  lineColor = document.querySelector("input").value;
  ctx.beginPath();
  ctx.fillStyle = lineColor;
  var circle = new Path2D();
  circle.moveTo(curX, curY);
  circle.arc(curX, curY, 10, 0, 2 * Math.PI);
  ctx.fill(circle);
  ctx.closePath();
  console.log("start");
}

function draw(event) {
  if (!pressed) return; // if not pressed.....

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = 20; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = lineColor; // hex color of line
  console.log(lineColor);
  setPosition(event);
  ctx.moveTo(preX, preY); // from position
  ctx.lineTo(curX, curY); // to position
  ctx.stroke(); // draw it!
  ctx.closePath();
}

function setPosition(event) {
  preX = curX;
  preY = curY;
  curX = getCurrentXPosition(event);
  console.log(curX);
  curY = getCurrentYPosition(event);
  console.log(curY);
}

function changeColor() {
  lineColor = document.querySelector("input").value;
}

function saveImage() {
  var dataURL = canvas.toDataURL("image/png");
  document.write('<img src="' + dataURL + '"/>');
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // faceSetup();
}

function faceSetup() {
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}
