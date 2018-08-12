var canvas = document.getElementById("draw");
var color;
mirror = document.getElementById("mirror");

// get canvas 2D context and set it to the correct size
var ctx = canvas.getContext("2d");
resize();

// resize canvas when window is resized
function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

// window.addEventListener("resize", resize);
document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", setPosition);
document.addEventListener("mouseenter", setPosition);
document.addEventListener("resize", resize);
document.querySelector("input").addEventListener("input", function(e) {
  changeColor();
});

var pos = { x: 0, y: 0 };

// new position from mouse events
function setPosition(e) {
  pos.x = e.offsetX;
  pos.y = e.offsetY;
}

function changeColor() {
  color = document.querySelector("input").value;
}

function saveCanvas() {
  var dataURL = canvas.toDataURL("image/png");
  document.write('<img src="' + dataURL + '"/>');
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  faceSetup();
}

function draw(e) {
  if (e.buttons !== 1) return; // if mouse is pressed.....

  color = document.querySelector("input").value;

  ctx.beginPath(); // begin the drawing path

  ctx.lineWidth = 20; // width of line
  ctx.lineCap = "round"; // rounded end cap
  ctx.strokeStyle = color; // hex color of line

  ctx.moveTo(pos.x, pos.y); // from position
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to position

  ctx.stroke(); // draw it!
}

function faceSetup() {
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}
