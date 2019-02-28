

function setup() {
  var m = createCanvas(windowWidth, windowHeight*90%);
  m.parent("home");
  background(20);
  strokeWeight(1);
}

function draw() {
  if (mouseIsPressed){
    stroke(255);
  }
  else {
    stroke(255);
  }
  line(mouseX-66, mouseY, mouseX+66, mouseY);
  line(mouseX, mouseY-66, mouseX, mouseY+66);
}