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
  this.maxforce = 2;
  this.mass= 1.3;
    
this.lifter = createVector(0, random(0, 0.2));  
}

Bubble.prototype.behaviors = function() {
  var bubbleUp = this.bubbleUp(this.target);
    
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);
  var lift = this.lift(mouse);  
    

 //var current = this.currency(this.target);  
    
  bubbleUp.mult(2);
//current.mult(1);
  flee.mult(5);

  this.applyForce(bubbleUp);
    //this.applyForce(current);
    // this.applyForce(fleeNbubble);
    // this.applyForce(flee);
  this.applyForce(lift);
}

Bubble.prototype.applyForce = function(f) {
  var force = f.div(this.mass);
  this.acc.add(force);
}

Bubble.prototype.update = function() {
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
    
  //this.lift(this.lift);
}

Bubble.prototype.show = function() {
    //draw bubbles
  fill('rgba(100%,100%,100%,0.15)');
  stroke('rgba(100%,100%,100%,0.25)');
  strokeWeight(4);
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
}





//DODO: bubbles to disappier and to create word
Bubble.prototype.bubbleUp = function(target) {
    //from position to desired target
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

//LIFT
Bubble.prototype.lift = function(target) {
    
    
    
   let top = createVector(this.pos.x, this.pos.y);
  //var desired = p5.Vector.sub(target, this.pos);
   var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    
    this.lifter.y-=0.00001;
  if (d < 50) {
    
  desired.mult(1);
  
  var steer = p5.Vector.sub(desired, this.vel);
  
  return steer; 
  } else {
    return createVector(0, 0);
 }
}


//DODO: simulating waves/currency underwater
Bubble.prototype.currency = function(target) {
  var desired = p5.Vector.sub(target, this.pos);
  var d = desired.mag();
   // pts[i].x + sin(frameCount*0.05 + pts[i].y*0.1)*5, pts[i].y)
  
    
    //nor working like that: var steer = p5.Vector.sub(desired+ sin(TWO_PI), this.vel);
 // var steer = p5.Vector.sub(desired+ sin(TWO_PI), this.vel);
    
    let a = random(0,10);
    let wave = sin(a)+1;
    var steer = p5.Vector.sub(desired, this.vel);
 
  return steer;
}






//DODO:flee and bubbel up to top and bubbrl up from bottom do refill letters again
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
