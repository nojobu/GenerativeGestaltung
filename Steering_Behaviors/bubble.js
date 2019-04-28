// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

function Bubble(x, y, r_size,m,t) {
    //scan typostartpoint and endpoint to let bubble refill here
  this.pos = createVector(x, height);
  this.target = createVector(x, y);
  this.vel = createVector(0, 1);
  this.acc = createVector();
  this.r = r_size;
  this.maxspeed = 10;
  this.maxforce = 2;
  this.mass= m;
  this.text=t;
    
}

Bubble.prototype.behaviors = function() {
    if(this.text== true){
         var bubbleUp = this.bubbleUp(this.target);
        bubbleUp.mult(2);
         this.applyForce(bubbleUp);
    }
    
  var mouse = createVector(mouseX, mouseY);
  var move = this.move(mouse);
  
    if(this.text==false){
        move.mult(4);
    }else{
        move.mult(2);
    }

  this.applyForce(move);
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
    //draw bubbles
  fill('rgba(100%,100%,100%,0.15)');
  stroke('rgba(100%,100%,100%,0.25)');
  strokeWeight(4);
  strokeWeight(this.r);
  point(this.pos.x, this.pos.y);
}





//bubbles create word
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
Bubble.prototype.move = function(target) {
        
   let top = createVector(0, this.pos.y);
  //var desired = p5.Vector.sub(target, this.pos);
   var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();

      desired.mult(-10);
  if (d < 50) {
      var steer = p5.Vector.sub(desired, this.vel);

      steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
 }
}


