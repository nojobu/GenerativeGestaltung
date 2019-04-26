// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

function Bubble(x, y, r_size) {
    //scan typostartpoint and endpoint to let bubble refill here
  this.pos = createVector(x, height);
  this.target = createVector(x, y);
  this.vel = createVector(0, 1);
  this.acc = createVector();
  this.r = r_size;
  this.maxspeed = 10;
  this.maxforce = 1;
  this.mass= 0.0;
}

Bubble.prototype.behaviors = function() {
  var arrive = this.arrive(this.target);
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);

  arrive.mult(1);
  flee.mult(5);

  this.applyForce(arrive);
  this.applyForce(flee);
}

Bubble.prototype.applyForce = function(f) {
  var force = f.div(this.mass);
  this.acc.add(force);
}

Bubble.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

Bubble.prototype.show = function() {
  fill('rgba(100%,100%,100%,0.15)');
  stroke('rgba(100%,100%,100%,0.25)');
  strokeWeight(4);
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
}


Bubble.prototype.arrive = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  var speed = this.maxspeed;
  if (d < 100) {
    speed = map(d, 0, 100, 0, this.maxspeed);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired, this.vel);
  steer.limit(this.maxforce);
  return steer;
}

Bubble.prototype.flee = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
  if (d < 50) {
    desired.setMag(this.maxspeed);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}
