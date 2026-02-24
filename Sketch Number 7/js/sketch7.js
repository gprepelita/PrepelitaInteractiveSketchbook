// universal variables
let redX = 0;
let redY = 40;
let blueX = 0;
let blueY = 110;
let w = 50;
let redFinish = false;
let blueFinish = false;

function setup() {
  createCanvas(800, 200);
  textSize(10);
}

function draw() {
  background(230);
  noStroke();
  textSize(10);

  fill(255, 0, 0);
  rect(redX, redY, w, w);

  fill(0, 0, 255);
  rect(blueX, blueY, w, w);

  if (redFinish) {
    fill(255, 0, 0);
    text("FINISHED", width - w, 20);
  }

  if (blueFinish) {
    fill(0, 0, 255);
    text("FINISHED", width - w, 170);
  }
  // tracking how far the squares have moved
  fill(0);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Red distance: " + redX + " | Blue distance: " + blueX, 10, 10);
}

// when right arrow is pressed, squares move to the right at different speeds
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    redX += 50;
    blueX += 20;
  }

  if (redX >= width - w) {
    redX = width - w;
    redFinish = true;
  }

  if (blueX >= width - w) {
    blueX = width - w;
    blueFinish = true;
  }
}
