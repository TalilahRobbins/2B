let video;

function setup() {
  let canvas = createCanvas(600, 450);
    canvas.parent('p5-container'); 
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(220);
  video.loadPixels();
  let stepSize = 10; // Adjust the step size to control the density of lines
  for (let y = 0; y < video.height; y += stepSize) {
    for (let x = 0; x < video.width; x += stepSize) {
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let brightness = (r + g + b) / 3;
      let threshold = 50; // Adjust threshold to control sensitivity
      if (brightness < threshold) {
        stroke(0);
        strokeWeight(2);
        line(x, y, x + stepSize, y +