let offset = 0;
let offsetY = 0;

let startTime;
let timeLimit = 10000;

let timerStarted = false;
let level = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //RECT MODE CENTER measures placement from the center of the shape
  rectMode(CENTER);
}

function draw() {
  background(0);

  // level rules
  if (level === 1) {
    timeLimit = 10000;
  }

  if (level === 2) {
    timeLimit = 5000;
  }

  // timer logic
  if (timerStarted) {
    let elapsed = millis() - startTime;
    let remaining = floor((timeLimit - elapsed) / 1000);
  }

  textAlign(CENTER);
  offset = 0;
  offsetY = 0;
  timerStarted = false;

  // level 1 win - advance to level 2
  if (level === 1 && squareX > width - 5) {
    level = 2;
  }

  // level 2 final win
  if (level === 2 && squareX > width - 50) {
  }

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

  offset += random(-50, 150);
  offsetY += random(-50, 150);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
