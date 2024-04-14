let shapes = [];

function setup() {
  let canvas = createCanvas(600, 450);
  canvas.parent('p5-container'); 
  generateImage();
}

function draw() {
  background(255);
  // Display shapes
  for (let shape of shapes) {
    shape.display();
  }
}

function keyPressed() {
  // Regenerate image when any key is pressed
  generateImage();
}

function generateImage() {
  shapes = [];
  // Generate random number of shapes
  let numShapes = random(5, 20);
  for (let i = 0; i < numShapes; i++) {
    let shapeType = floor(random(2)); // 0 for circle, 1 for rectangle
    let x = random(width);
    let y = random(height);
    let size = random(10, 50);
    let shape;
    if (shapeType === 0) {
      shape = new Circle(x, y, size);
    } else {
      let w = random(10, 50);
      let h = random(10, 50);
      shape = new Rectangle(x, y, w, h);
    }
    shapes.push(shape);
  }
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}

class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.color);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}

