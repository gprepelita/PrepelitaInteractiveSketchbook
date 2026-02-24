function setup() {
  createCanvas(1000, 500);
}

function draw() {
  noStroke();
  background(255);
  fill(0);
  rect(100, 100, 125, 125);
  // constraint
  let x = constrain(mouseX, 150, 175);
  let y = constrain(mouseY, 150, 175);
  fill(255);
  ellipse(x, y, 100);
}
