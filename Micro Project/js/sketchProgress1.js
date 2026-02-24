let gameStarted = false;
let circleX = 150;
let circleY = 150;
let circleRadius = 25;
let boxX = 50;
let boxY = 50;
let boxW = 300;
let boxH = 200;

function setup() {
  createCanvas(800, 600);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);

  // Drawing the constraint box
  if (!gameStarted) {
    noFill();
    stroke(50);
    strokeWeight(2);
    rect(boxX, boxY, boxW, boxH);
  }

  // Constraining circle inside the box
  circleX = constrain(circleX, boxX + circleRadius, boxX + boxW - circleRadius);
  circleY = constrain(circleY, boxY + circleRadius, boxY + boxH - circleRadius);

  // Drawing circle
  noStroke();
  fill(0);
  ellipse(circleX, circleY, circleRadius);
}

// Circle movement
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    circleX -= 20;
  } else if (keyCode === RIGHT_ARROW) {
    circleX += 20;
  } else if (keyCode === UP_ARROW) {
    circleY -= 20;
  } else if (keyCode === DOWN_ARROW) {
    circleY += 20;
  }
}

function mousePressed() {
  gameStarted = true;
}
