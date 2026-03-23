let menuOff = false;
let gameStarted = false;
let gameWon = false;
let moleX = 827;
let moleY = 300;
let moleAngle = 0;
let mole;
let worm;
let font;
let startTime;
let timeLimit = 30000;
let timeLeft;
let gameOver = false;
let level = 1;
let levelStartScreen = false;
let showMaze = false;
let mazeRevealStart = 0;
let mazeRevealDuration = 1000;
let revealUsed = false;

// Store all maze boxes in one array
const boxes = [
  { x: 800, y: 50, w: 150, h: 400 }, //box 1
  { x: 50, y: 50, w: 950, h: 150 }, //box 2
  { x: 100, y: 50, w: 150, h: 850 }, //box 3
  { x: 100, y: 750, w: 400, h: 150 }, //box 4
  { x: 350, y: 450, w: 150, h: 450 }, //box 5
  { x: 350, y: 550, w: 600, h: 150 }, //box 6
  { x: 800, y: 550, w: 150, h: 350 }, //box 7
  { x: 800, y: 750, w: 600, h: 150 }, //box 8
  { x: 1150, y: 50, w: 150, h: 850 }, //box 9
  { x: 1150, y: 50, w: 450, h: 150 }, //box 10
  { x: 1400, y: 50, w: 150, h: 500 }, //box 11
  { x: 1400, y: 425, w: 500, h: 150 }, // box 12
];

function preload() {
  mole = loadImage("img/molesprite.png");
  worm = loadImage("img/wormsprite.png");
  font = loadFont("fonts/Qaaxee.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // changing angle mode to degrees for easier rotation
  angleMode(DEGREES);
  // Resizing sprites to fit better in the maze boxes
  mole.resize(100, 0);
  worm.resize(40, 0);
}

// Check if mole is inside ANY box in the array
function insideBox(x, y) {
  return boxes.some(
    (b) =>
      x > b.x &&
      x < b.x + b.w - mole.width &&
      y > b.y &&
      y < b.y + b.h - mole.height,
  );
}
// function for the level structure
function startNextLevel() {
  level++;
  gameWon = false;
  gameOver = false;
  gameStarted = false;
  levelStartScreen = true;
  revealUsed = false;

  moleX = 827;
  moleY = 300;

  if (level === 2) {
    timeLimit = 20000;
  }
  if (level === 3) {
    timeLimit = 15000;
  }
}

function draw() {
  background(64, 42, 34);
  menuOff ? drawGame() : drawMenu();
}

// function for restarting the game
function resetGame() {
  // Reset all game state variables
  level = 1;
  menuOff = true;
  gameStarted = false;
  gameWon = false;
  gameOver = false;
  levelStartScreen = false;
  revealUsed = false;
  showMaze = false;

  // Reset mole position
  moleX = 827;
  moleY = 300;
  moleAngle = 0;

  // Reset the timer
  timeLimit = 30000;

  // Restarting the draw loop
  loop();
}

function drawGame() {
  // Drawing a start screen for each level
  if (levelStartScreen) {
    fill(255);
    textAlign(CENTER, CENTER);
    textFont(font);

    textSize(90);
    text("Level " + level, width / 2, height / 2 - 80);

    textSize(40);
    text("Press Any Key", width / 2, height / 2 + 20);
    // stop the rest of drawGame from running
    return;
  }

  // Handling maze reveal timer
  if (showMaze && millis() - mazeRevealStart > mazeRevealDuration) {
    showMaze = false;
  }
  // Drawing all boxes using a loop
  if (!gameStarted || showMaze) {
    fill(115, 83, 64);
    noStroke();
    for (let b of boxes) {
      rect(b.x, b.y, b.w, b.h);
    }
  }

  // Movement with WASD keys and starting the timer on first move
  let speed = 7;
  let nextX = moleX;
  let nextY = moleY;

  if (keyIsDown(65)) {
    nextX -= speed;
    moleAngle = 180;
    if (!gameStarted) {
      startTime = millis();
    }
    gameStarted = true;
  } // A
  if (keyIsDown(68)) {
    nextX += speed;
    moleAngle = 0;
    if (!gameStarted) {
      startTime = millis();
    }
    gameStarted = true;
  } // D
  if (keyIsDown(87)) {
    nextY -= speed;
    moleAngle = 270;
    if (!gameStarted) {
      startTime = millis();
    }
    gameStarted = true;
  } // W
  if (keyIsDown(83)) {
    nextY += speed;
    moleAngle = 90;
    if (!gameStarted) {
      startTime = millis();
    }
    gameStarted = true;
  } // S

  if (insideBox(nextX, nextY)) {
    moleX = nextX;
    moleY = nextY;
  }

  // Drawing the mole
  push();
  translate(moleX + mole.width / 2, moleY + mole.height / 2);
  rotate(moleAngle + 90);
  imageMode(CENTER);
  image(mole, 0, 0);
  pop();

  // Drawing the worm
  let wormX = width - 60;
  let wormY = height / 2;
  image(worm, wormX, wormY);

  // Checking for win by collision detection
  if (
    dist(moleX + mole.width / 2, moleY + mole.height / 2, wormX, wormY) < 50
  ) {
    if (level === 1) {
      startNextLevel();
    } else if (level === 2) {
      startNextLevel();
    } else {
      gameWon = true;
    }
  }
  if (gameWon) {
    fill(255);
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(100);
    text("You Win!", width / 2, height / 3);

    textSize(30);
    text("Press 'R' to Play Again", width / 2, height / 2);
    noLoop(); // Stop the draw loop to freeze the win screen
  }

  // Losing condition
  if (gameOver && !gameWon) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(100);
    text("Try Again!", width / 2, height / 3);

    textSize(30);
    text("Press 'R' to Restart", width / 2, height / 2);
    noLoop();
  }

  // timer logic
  if (gameStarted && !gameWon) {
    let elapsed = millis() - startTime;
    timeLeft = max(0, ceil((timeLimit - elapsed) / 1000));

    if (elapsed >= timeLimit) {
      gameOver = true;
    }
    fill(255);
    textFont(font);
    textSize(32);
    textAlign(LEFT, TOP);
    text("Time: " + timeLeft, width - 200, height - 100);
    text("Level: " + level, width / 2, 20);
    if (!revealUsed) {
      text("Press SPACE to reveal maze", 40, 20);
    } else {
      text("Maze Reveal Used", 40, 20);
    }
  }
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

function keyPressed() {
  // Check for restart key (R)
  if (keyCode === 82) {
    resetGame();
  }

  if (levelStartScreen) {
    levelStartScreen = false;
    return;
  }
  // space bar reveals maze
  if (keyCode === 32 && !revealUsed) {
    showMaze = true;
    mazeRevealStart = millis();
    revealUsed = true;
  }
}
function mousePressed() {
  menuOff = true;
  levelStartScreen = false;
}
