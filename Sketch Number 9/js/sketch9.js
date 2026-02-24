let pictures = [];
let currentIndex = 0;

function preload() {
  pictures[0] = loadImage("../Sketch Number 8/img/image1.jpeg");
  pictures[1] = loadImage("../Sketch Number 8/img/image2.jpeg");
  pictures[2] = loadImage("../Sketch Number 8/img/image3.jpeg");
  pictures[3] = loadImage("../Sketch Number 8/img/image4.jpeg");
  pictures[4] = loadImage("../Sketch Number 8/img/image5.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(0);
  let img = pictures[currentIndex];
  image(img, windowWidth / 2, windowHeight / 2);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(24);
  text("State " + (currentIndex + 1) + "/" + pictures.length, width / 2, 20);

  textSize(16);
  text("Use left and right arrow keys to navigate", width / 2, height - 40);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentIndex++;
    if (currentIndex >= pictures.length) {
      currentIndex = 0;
    }
  }
  if (keyCode === LEFT_ARROW) {
    currentIndex = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
