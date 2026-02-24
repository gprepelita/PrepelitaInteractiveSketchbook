let images = [];
let currentIndex = 0;

function preload() {
  images[0] = loadImage("../Sketch Number 8/img/image1.jpeg");
  images[1] = loadImage("../Sketch Number 8/img/image2.jpeg");
  images[2] = loadImage("../Sketch Number 8/img/image3.jpeg");
  images[3] = loadImage("../Sketch Number 8/img/image4.jpeg");
  images[4] = loadImage("../Sketch Number 8/img/image5.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
}

function draw() {
  background(255);
  let img = images[currentIndex];
  image(img, 0, 0);

  textSize(16);
  text("Image " + (currentIndex + 1) + " of " + images.length, 700, 30);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }
  if (keyCode === LEFT_ARROW) {
    currentIndex = currentIndex - 2;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
  }
}
