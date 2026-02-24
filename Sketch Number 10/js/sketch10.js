let offset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //RECT MODE CENTER measures placement from the center of the shape
  rectMode(CENTER);
}

function draw() {
  background(0);

  push();
  translate(offset, offset);
  fill(100, 200, 100);
  rect(width / 3, height / 2, 100, 100);
  pop();

  rect((width * 2) / 3, height / 2, 100, 100);
}

function keyPressed() {
  offset += 20;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
