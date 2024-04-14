let shapes = [];

function setup() {
  let canvas = createCanvas(600, 450);
    canvas.parent('p5-container');  // Create shapes
    for (let i = 0; i < 5; i++) {
      let shapeType = floor(random(2));
      let x = random(width);
      let y = random(height);
      let shape;
      if (shapeType === 0) {
        shape = new Circle(x, y, random(20, 50));
      } else {
        shape = new Circle(x, y, random(20, 50), random(20, 50));
      }
      shapes.push(shape);
    }
  }
  
  function draw() {
    background(0, 0, 0); 
    // Display shapes
    for (let shape of shapes) {
      shape.update();
      shape.display();
    }
  }
  
  function mouseClicked() {
    // Check if any shape is clicked
    for (let shape of shapes) {
      if (shape.isClicked(mouseX, mouseY)) {
        shape.bounce();
      }
    }
  }
  
  class Circle {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.xSpeed = random(-5, 5);
      this.ySpeed = random(-5, 5);
    }
  
    display() {
      fill(255, 255, 255); 
      noStroke(); // No outline
      ellipse(this.x, this.y, this.r * 2);
    }
  
    isClicked(mx, my) {
      let d = dist(mx, my, this.x, this.y);
      return d < this.r;
    }
  
    bounce() {
      this.xSpeed *= -1;
      this.ySpeed *= -1;
    }
    
    update() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      if (this.x <= this.r || this.x >= width - this.r) {
        this.xSpeed *= -1;
      }
      if (this.y <= this.r || this.y >= height - this.r) {
        this.ySpeed *= -1;
      }
    }
  }
  
  class Rectangle {
    constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.xSpeed = random(-5, 5);
      this.ySpeed = random(-5, 5);
    }
  
    display() {
      fill(255, 105, 180); 
      rectMode(CENTER);
      rect(this.x, this.y, this.w, this.h);
    }
  
    isClicked(mx, my) {
      return (mx > this.x - this.w / 2 && mx < this.x + this.w / 2 &&
              my > this.y - this.h / 2 && my < this.y + this.h / 2);
    }
  
    bounce() {
      this.xSpeed *= 1;
      this.ySpeed *= 1;
    }
    
    update() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      if (this.x <= this.w / 2 || this.x >= width - this.w / 2) {
        this.xSpeed *= -1;
      }
      if (this.y <= this.h / 2 || this.y >= height - this.h / 2) {
        this.ySpeed *= -1;
      }
    }
  }
