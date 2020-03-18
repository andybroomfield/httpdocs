// set up from mover example
let movers = new Array(200);
let newX;
let newY;
let width = 640;
let height = 480

function setup() {
  createCanvas(width, height);
  // frameRate(25);
  smooth();
  background(0);
  noStroke();
  //cursor(CROSS);
  for (let i = 0; i < movers.length; i++) {
    movers[i] = new Mover();
  }
}

function draw() {
  //clear();
  fill(0,10);
  rect(0,0,width,height);

  // Calling functions of all of the objects in the array.
  for (let i = 0; i < movers.length; i++) {
    movers[i].update();
    movers[i].checkEdges();
    movers[i].checkPoint();
    movers[i].display();
  }
}

function mouseMoved() {
  newX = mouseX;
  newY = mouseY;
}


//movers class from vectors example
class Mover {

  constructor() {
    this.moverLocation = new createVector(random(width),random(height));
    this.velocity = new createVector(0,0);
    this.topspeed = 2 + random(8);
    this.shade = random(180,240);
    this.acceleration;
    this.size;
  }

  update() {

    // Our algorithm for calculating acceleration:
    let mouse = new createVector(newX,newY);
    let dir = p5.Vector.sub(mouse,this.moverLocation);  // Find vector pointing towards mouse
    dir.normalize();     // Normalize
    dir.mult(0.5);       // Scale
    this.acceleration = dir;  // Set to acceleration

    // Motion 101!  Velocity changes by acceleration.  moverLocation changes by velocity.
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.moverLocation.add(this.velocity);

    this.size = 60 - (this.velocity.mag() * 2);
  }

  display() {
    fill(this.shade);
    ellipse(this.moverLocation.x,this.moverLocation.y,this.size,this.size);
  }

  checkEdges() {

    if (this.moverLocation.x > width) {
      this.moverLocation.x = 0;
    } else if (this.moverLocation.x < 0) {
      this.moverLocation.x = width;
    }

    if (this.moverLocation.y > height) {
      this.moverLocation.y = 0;
    }  else if (this.moverLocation.y < 0) {
      this.moverLocation.y = height;
    }

  }

  checkPoint() {
    if (this.moverLocation.x == newX && this.moverLocation.y == newY) {
      this.moverLocation.x = random(width);
      this.moverLocation.y = random(height);
    }
  }

}
