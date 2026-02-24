// declaring universal variables
let w = 500;
let h = 500;

let circleX = 850;
let circleY = 350;
let circleSize = 200;

let rectX = 450;
let rectY = 300;
let rectW = 100;
let rectH = 100;

let clickCount = 0;

// p5.js setup
function setup() {
  createCanvas(1920, 1080);
  noStroke();
  background(200);
}

// draw function
function draw() {
  background(200);

  // show red circle and text if not pressed 5 times
  if (clickCount < 5) {
    fill(200, 0, 0);
    ellipse(circleX, circleY, circleSize, circleSize);
    fill(0);
    textSize(18);
    text("Hit the red circle to wake up", 750, 600);
  }

  // if circle pressed 10 times, move square toward right side
  if (clickCount >= 5) {
    let targetX = width - rectW - 50;
    rectX = lerp(rectX, targetX, 0.15);
  } else {
    // keep square within visible constraints
    rectX = constrain(rectX, 0, width - rectW);
    rectY = constrain(rectY, 0, height - rectH);
  }

  // blue square
  fill(0, 0, 200);
  rect(rectX, rectY, rectW, rectH);
}

function mouseClicked() {
  clickCount++;
}
