let gameStarted = false;
let circleX = 650;
let circleY = 300;
let circleRadius = 25;
let boxOneX = 600;
let boxOneY = 50;
let boxOneW = 100;
let boxOneH = 300;

let boxTwoX = 600;
let boxTwoY = 50;
let boxTwoW = 300;
let boxTwoH = 100;

// Creating a function to check if the circle is inside either of the boxes
function insideBox(x, y) {
  let inBoxOne =
    x > boxOneX + circleRadius &&
    x < boxOneX + boxOneW - circleRadius &&
    y > boxOneY + circleRadius &&
    y < boxOneY + boxOneH - circleRadius;

  let inBoxTwo =
    x > boxTwoX + circleRadius &&
    x < boxTwoX + boxTwoW - circleRadius &&
    y > boxTwoY + circleRadius &&
    y < boxTwoY + boxTwoH - circleRadius;

  return inBoxOne || inBoxTwo;
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // Drawing the maze region
  if (!gameStarted) {
    noFill();
    stroke(50);
    strokeWeight(2);
    rect(boxOneX, boxOneY, boxOneW, boxOneH);
    rect(boxTwoX, boxTwoY, boxTwoW, boxTwoH);
  }

  // Drawing circle
  noStroke();
  fill(0);
  ellipse(circleX, circleY, circleRadius);
}

// Circle movement (only if the new position is inside the boxes)
function keyPressed() {
  let newX = circleX;
  let newY = circleY;

  if (keyCode === LEFT_ARROW) {
    newX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    newX += 10;
  } else if (keyCode === UP_ARROW) {
    newY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    newY += 10;
  }

  if (insideBox(newX, newY)) {
    circleX = newX;
    circleY = newY;
  }
}

function mousePressed() {
  gameStarted = true;
}
