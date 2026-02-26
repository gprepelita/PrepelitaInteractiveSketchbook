let offset = 0;
let offsetY = 0;
let startTime;
let timeLimit = 10000;
let timerStarted = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //RECT MODE CENTER measures placement from the center of the shape
  rectMode(CENTER);

  startTime = millis();
}

function draw() {
  background(0);

  let elapsedTime = millis() - startTime;

  let remainingTime = floor((timeLimit - elapsedTime) / 1000);

  textSize(32);
  fill(255);
  text("Time Remaining: " + remainingTime, width / 2, 50);

  if (elapsedTime > timeLimit) {
    offset = 0;
    offsetY = 0;
    startTime = millis();
  }

  // move rectangle
  push();
  translate(offset, offsetY);
  fill(100, 200, 50);
  rect(width / 3, height / 2, 100, 100);
  pop();

  // static rectangle
  rect(width / 3, height / 2, 100, 100);
}

function keyPressed() {
  if (!timerStarted) {
    startTime = millis();
    timerStarted = true;
  }

  offset += random(-50, 50);
  offsetY += random(-75, 75);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
