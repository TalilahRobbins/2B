function setup() {
  let canvas = createCanvas(600, 450);
  canvas.parent('p5-container'); 
background(255,165,0);
imageMode(CENTER);
capture=createCapture(VIDEO); 
capture.hide();
}


function draw() {
  
  if (mouseIsPressed){
    image(capture, mouseX, mouseY, img.width/4, img.height/4);
  }
 else{
image(capture, width/2, height/2)