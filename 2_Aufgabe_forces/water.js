function Water(x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
};

// Is the Mover in the Liquid?
Water.prototype.contains = function(m) {
  let l = m.pos;
  return l.x > this.x && l.x < this.x + this.w &&
         l.y > this.y && l.y < this.y + this.h;
}

// Calculate drag force
Water.prototype.calculateDrag = function(m) {
  // Magnitude is coefficient * speed squared
  let speed = m.vel.mag();
  let dragMagnitude = this.c * speed * speed;

  // Direction is inverse of velocity
  let dragForce = m.vel.copy();
  dragForce.mult(-1);

  // Scale according to magnitude
  // dragForce.setMag(dragMagnitude);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
}

Water.prototype.display = function() {
  noStroke();
  fill('rgba(0%,0%,100%,0.55)');
  rect(this.x, this.y, this.w, this.h);
    
}