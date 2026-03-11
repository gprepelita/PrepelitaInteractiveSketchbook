let menuOff = false;
let gameStarted = false;
let moleX = 827;
let moleY = 300;
let moleAngle = 0;
let mole;
let worm;
let font;

// Store all maze boxes in one array
const boxes = [
  { x: 800, y: 50, w: 150, h: 400 }, //box 1
  { x: 100, y: 50, w: 850, h: 150 }, //box 2
  { x: 100, y: 50, w: 150, h: 850 }, //box 3
  { x: 100, y: 750, w: 400, h: 150 }, //box 4
  { x: 350, y: 550, w: 150, h: 350 }, //box 5
  { x: 350, y: 550, w: 600, h: 150 }, //box 6
  { x: 800, y: 550, w: 150, h: 350 }, //box 7
  { x: 800, y: 750, w: 500, h: 150 }, //box 8
  { x: 1150, y: 50, w: 150, h: 850 }, //box 9
  { x: 1150, y: 50, w: 400, h: 150 }, //box 10
  { x: 1400, y: 50, w: 150, h: 500 }, //box 11
  { x: 1400, y: 400, w: 400, h: 150 }, //box 12
];

function preload() {
  mole = loadImage("img/molesprite.svg");
  worm = loadImage("img/wormsprite.svg");
  font = loadFont("fonts/Qaaxee.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // changing angle mode to degrees for easier rotation
  mole.resize(100, 0); // Resizing sprite to fit better in the maze boxes
}

// Check if (x,y) is inside ANY box in the array
function insideBox(x, y) {
  return boxes.some(
    (b) =>
      x > b.x &&
      x < b.x + b.w - mole.width &&
      y > b.y &&
      y < b.y + b.h - mole.height,
  );
}

function draw() {
  background(64, 42, 34);
  menuOff ? drawGame() : drawMenu();
}

function drawGame() {
  // Drawing all boxes using a loop
  if (!gameStarted) {
    fill(115, 83, 64);
    noStroke();
    for (let b of boxes) {
      rect(b.x, b.y, b.w, b.h);
    }
  }

  // Movement with WASD keys
  let speed = 5;
  let nextX = moleX;
  let nextY = moleY;

  if (keyIsDown(65)) {
    nextX -= speed;
    moleAngle = 180;
    gameStarted = true;
  } // A
  if (keyIsDown(68)) {
    nextX += speed;
    moleAngle = 0;
    gameStarted = true;
  } // D
  if (keyIsDown(87)) {
    nextY -= speed;
    moleAngle = 270;
    gameStarted = true;
  } // W
  if (keyIsDown(83)) {
    nextY += speed;
    moleAngle = 90;
    gameStarted = true;
  } // S

  if (insideBox(nextX, nextY)) {
    moleX = nextX;
    moleY = nextY;
  }

  // Drawing mole
  push();
  translate(moleX + mole.width / 2, moleY + mole.height / 2);
  rotate(moleAngle + 90);
  imageMode(CENTER);
  image(mole, 0, 0);
  pop();

  // Drawing worm
  worm.resize(40, 0);
  image(worm, width - 60, height / 2);

  // for the first 30 for every 60, show text
  if (frameCount % 60 < 20) {
    if (!gameStarted) {
      fill(255);
      textAlign(CENTER, CENTER);
      textFont(font);
      textSize(32);
      text("Start Moving to Begin", width - 200, height - 100);
    }
  }
}

function drawMenu() {
  fill(255);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(100);
  text("Mole Run!", width / 2, 100);
  textSize(32);
  text(
    "Catch the worm in time!\nYou will have to memorize the path\n\n\nControls:\nMove with WASD keys\nClick to Start",
    width / 2,
    height / 2,
  );
}

function mousePressed() {
  menuOff = true;
}
