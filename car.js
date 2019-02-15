let bug1; // Declare objects
let bug2;
let bug3;
let bug4;
let timer = 300;

function setup() {
  var myC = createCanvas(windowWidth, windowHeight);
  myC.parent("home");
  // Create object
  bug1 = new Jitter(width/4-200);
  bug2 = new Jitter(width/2-200);
  bug3 = new Jitter(width/4*3-200);
  bug4 = new Jitter(width-200);
}

function draw() {
  background(0);
  bug1.move();
  bug1.display();
  bug2.move();
  bug2.display();
  bug3.move();
  bug3.display();
  bug4.move();
  bug4.display();

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  text(timer, 50, 50);
  
  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }
  
  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right
  
  if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
  }
}

// Jitter class
class Jitter {
  constructor(x) {
    this.x = x;
    this.y = windowHeight/2;
    this.diameter = 20;
    this.speed = 2;
  }

  move() {
    if(frameCount % 80 ==0){
      this.speed +=1;
    }
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {

    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
