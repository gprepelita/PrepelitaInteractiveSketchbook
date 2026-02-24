// starting location of circle
let x = 0;
let y = 0;

function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  background(255);

  // lerp funtion (linear interpretation)
  // direct manipulation
  x = lerp(x, mouseX, 0.005);
  y = lerp(y, mouseY, 0.005);

  // circle values
  fill(200);
  stroke(200);
  ellipse(x, y, 66, 66);
}
