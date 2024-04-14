let shapes = [];
let speedIncrease = 0.5;

function setup() {
  let canvas = createCanvas(600, 450);
    canvas.parent('p5-container'); 

    }

function draw() {
  background(0,0,0);
  
  // Generate random shapes
  if (frameCount % 30 === 0) { // Add a new shape every 30 frames
    let shapeType = floor(random(2)); // 0 for ellipse, 1 for rectangle
    let x = random(width);
    let y = -50; // Start above the canvas
    let size = random(20, 50);
    let speed = random(1, 3) + speedIncrease; // Increase speed over time
    let shape = { type: shapeType, x: x, y: y, size: size, speed: speed };
    shapes.push(shape);
  }
  
  // Move and draw shapes
  for (let i = shapes.length - 1; i >= 0; i--) {
    let shape = shapes[i];
    shape.y += shape.speed;
    
    if (shape.type === 0) {
      ellipse(shape.x, shape.y, shape.size, shape.size);
    } else {
      rect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size);
    }
    
    // Remove shapes that are out of canvas
    if (shape.y - shape.size / 2 > height) {
      shapes.splice(i, 1);
    }
  }
  
  // Increase speed