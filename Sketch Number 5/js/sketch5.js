// declaring universal variables
var x = 0;
var y = 0;
var px = 0;
var py = 0;
var easing = 0.05;

// p5.js setup
function setup() {
  createCanvas(1920, 1080);
}

// draw function
function draw() {
  background(255);
  // easing movement towards mouse position and drawing line
  var targetX = mouseX;
  x += (targetX - x) * easing;
  var targetY = mouseY;
  y += (targetY - y) * easing;
  var weight = dist(x, y, px, py);
  strokeWeight(weight);
  line(x, y, px, py);
  py = y;
  px = x;

  // display text when the line is almost still
  if (dist(x, y, mouseX, mouseY) < 1) {
    textSize(16);
    fill(0);
    text("Rest", mouseX, mouseY);
  } else {
    if (dist(x, y, mouseX, mouseY) > 50) {
      textSize(16);
      fill(0);
      text("Move", mouseX, mouseY);
    }
  }
}
