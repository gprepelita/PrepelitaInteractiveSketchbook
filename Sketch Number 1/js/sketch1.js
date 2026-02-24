function setup()
{
    createCanvas(1920, 1080);
    // constantly copies objects over background when under function setup
    background(0);
}

function draw()
{
    // direct manipulation
    // rectangle values
    fill(0,255, 0);
    stroke(255, 255, 0);
    strokeWeight(8);
    rect(mouseX, mouseY, 200);
}