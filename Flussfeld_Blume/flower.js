function Flower(pos_x, pos_y, scale) {
    //Scale
    this.scl = scale;
    //radius
    this.pos = createVector(pos_x, pos_y);
    //frequency
  this.frq = createVector(0, 0);
    //magnitude
  this.mag = createVector(0, 0);
  

  this.update = function() {
   // this.pos.add(this.vel);
  }
  
  this.show = function() {
    //ellipse(x, y, w, [h])
    
    ellipse(this.pos.x, this.pos.y,this.scl,this.scl);
    
      
  }
  
  }