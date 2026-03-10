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
  background(0);

  // Drawing the maze region
  if (!gameStarted) {
    fill(255);
    noStroke();
    strokeWeight(2);
    rect(boxOneX, boxOneY, boxOneW, boxOneH);
    rect(boxTwoX, boxTwoY, boxTwoW, boxTwoH);
    textSize(32);
    fill(255);
    textAlign(CENTER, CENTER);
    text(
      "Escape the maze in time\nMove with arrow keys\nClick to Start",
      width / 6,
      height / 4,
    );
  }

  // Drawing circle
  noStroke();
  fill(200, 50, 50);
  ellipse(circleX, circleY, circleRadius);
}

function keyPressed() {
  // only allow movement after the game has started
  if (!gameStarted) {
    return;
  }

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
// Circle movement (only if the new position is inside the boxes)

function mousePressed() {
  gameStarted = true;
}
