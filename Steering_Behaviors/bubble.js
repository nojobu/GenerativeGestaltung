// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

function Bubble(x, y, r_size,m) {
    //scan typostartpoint and endpoint to let bubble refill here
  this.pos = createVector(x, height);
  this.target = createVector(x, y);
  this.vel = createVector(0, 1);
  this.acc = createVector();
  this.r = r_size;
  this.maxspeed = 10;
  this.maxforce = 2;
  this.mass= 2.0;
    
this.lifter = createVector(0, random(0, 0.2));  
}

Bubble.prototype.behaviors = function() {
  var bubbleUp = this.bubbleUp(this.target);
    
  var mouse = createVector(mouseX, mouseY);
  var flee = this.flee(mouse);
  
    
//    let dx = map(mouseX, 0, width, -1, 1);
//  let wind = createVector(mouseX, 0);
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
//this.lifter.y+=0.00001;
    
  this.acc.mult(0);
    
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
    
     
    
   let top = createVector(0, this.pos.y);
  //var desired = p5.Vector.sub(target, this.pos);
   var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    
    
    

      desired.mult(-10);
  if (d < 50) {
      var steer = p5.Vector.sub(desired, this.vel);

      steer.limit(this.maxforce);
     // randombubbles();
    return steer;
  } else {
    return createVector(0, 0);
 }
}


//Create random bubbles
//Bubble.prototype.randombubbles = function() {
//    fill('rgba(100%,100%,100%,0.15)');
//  stroke('rgba(100%,100%,100%,0.25)');
//  strokeWeight(4);
//  strokeWeight(random(1,this.r));
//  fill(0);
//}

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
