function setup() {
  let canvas = createCanvas(600, 450);
  canvas.parent('p5-container'); 
  background(0, 0, 255); // Set background to blue
}

function draw() {
  // Draw black lines whenever the mouse moves
  stroke(0,0,0); // Set stroke color to black
  strokeWeight(2); // Set stroke weight
  line(pmouseX, pmouseY, mouseX, mouseY); // Draw line from previous mouse position to current mouse position
}
