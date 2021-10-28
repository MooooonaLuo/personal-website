var canvas;
var rotationSpeed = 0.005;

// Resize the canvas everytime users resize the window
function windowResized(){
    resizeCanvas(windowWidth-20, windowHeight);
}

function setup() {
    max_distance = dist(0, 0, width, height); // distance from top left to bottom right of the canvas
    canvas = createCanvas(windowWidth-20, windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style('z-index','-2');
}
  
  function draw() {    
    background(255,255,255);
    noFill();
    stroke(34,195,145);
    translate(-windowWidth/2 + 60, -windowHeight/2 + 70, 0); // reposition the matrix
    push();

    if (windowWidth >= 450){
        translate(windowWidth * 0.03,0);
        rotateX(5);
        rotateY(5);
        rotateZ(5);
    }else{
        // moble version
        translate(windowWidth * 0.03 - 10,0);
        rotateX(0);
        rotateY(0);
        rotateZ(-6);
    }

    let distance = dist(mouseX, mouseY, 90, 70);
    if (distance < 40) {
        rotateZ(frameCount * rotationSpeed * 1.5);
        rotateX(frameCount * rotationSpeed * 1.5);
        rotateY(frameCount * rotationSpeed * 1.5);
    }
    strokeWeight(1.5);
    let bigBox = box(25,25,25);
    pop();
  }