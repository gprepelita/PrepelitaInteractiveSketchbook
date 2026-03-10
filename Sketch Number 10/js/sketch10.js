let offset = 0;
let offsetY = 0;

let startTime;
let timeLimit = 10000;

let timerStarted = false;
let level = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);

  // Level rules
  if (level === 1) {
    timeLimit = 10000;
  }

  if (level === 2) {
    timeLimit = 5000;
  }

  // Timer logic
  if (timerStarted) {
    let elapsed = millis() - startTime;
    let remaining = floor((timeLimit - elapsed) / 1000);

    textAlign(CENTER);
    textSize(24);
    fill(255);
    text("Level: " + level, width / 2, 30);
    text("Time: " + remaining, width / 2, 60);

    if (elapsed > timeLimit) {
      offset = 0;
      offsetY = 0;
      timerStarted = false; // pause until next key press
    }
  } else {
    textAlign(CENTER);
    textSize(24);
    fill(255);
    text("Level: " + level, width / 2, 30);
  }

  let squareX = (width * 2) / 3 + offset;

  // LEVEL 1 WIN → ADVANCE TO LEVEL 2
  if (level === 1 && squareX > width - 50) {
    level = 2;

    // reset square position
    offset = 0;
    offsetY = 0;

    // pause timer until next key press
    timerStarted = false;
  }

  // LEVEL 2 FINAL WIN
  if (level === 2 && squareX > width - 50) {
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(255);
    text("YOU WIN", width / 2, height / 2);
    timerStarted = false;
  }

  // Moving rectangle
  push();
  translate(offset, offsetY);
  fill(100, 200, 50);
  rect((width * 2) / 3, height / 2, 100, 100);
  pop();

  // Static rectangle
  rect(width / 3, height / 2, 100, 100);
}

function keyPressed() {
  if (!timerStarted) {
    startTime = millis();
    timerStarted = true;
  }

  // Slightly harder movement in Level 2
  if (level === 1) {
    offset += random(-25, 50);
    offsetY += random(-50, 75);
  }

  if (level === 2) {
    offset += random(-40, 80);
    offsetY += random(-80, 160);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
