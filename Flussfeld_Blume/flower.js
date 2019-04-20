

function Flower(pos_x, pos_y, scl, vec_head) {
    

 //https://editor.p5js.org/generative-design/sketches/P_2_1_3_01

this.count = 0;
this.tileCountX = 10;
this.tileCountY = 10;
this.tileWidth = width / this.tileCountX;
this.tileHeight = height / this.tileCountY;


this.circleCount = 0;
this.endSize = 0;
this.endOffset = 0;

this.actRandomSeed = 0;
    
// Draws a single flower into a canvas context ctx
//drawFlower(ctx, {x: width / 2, y: height / 2, radius}, 8.72, 0.07, 0.15, 0.99, 500);
    
    
    //Scale
    this.scl = scl;
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
    //ellipse(x*scl, y*scl,scl,scl)
    //ellipse(this.pos.x*this.scl, this.pos.y*this.scl,this.scl,this.scl);
   
      randomSeed(this.actRandomSeed);

  translate(this.tileWidth / 2, this.tileHeight / 2);
                        //mouseX / 30 + 1;
    this.circleCount = vec_head / 30 + 1;
  
      this.endSize = map(vec_head, 0, max(width, vec_head), this.tileWidth / 2, 0);
  
      this.endOffset = map(this.pos.y, 0, max(height, this.pos.y), 0, (this.tileWidth - this.endSize) / 2);
     
      
    for (var gridY = 0; gridY <= this.tileCountY; gridY++) {
    for (var gridX = 0; gridX <= this.tileCountX; gridX++) {
        
      push();
      translate(this.tileWidth * gridX, this.tileHeight * gridY);
      scale(1, this.tileHeight / this.tileWidth);

      var toggle = int(random(0, 4));
      if (toggle == 0) rotate(-HALF_PI);
      if (toggle == 1) rotate(0);
      if (toggle == 2) rotate(HALF_PI);
      if (toggle == 3) rotate(PI);

      // draw module
      for (var i = 0; i < this.circleCount; i++) {
        var diameter = map(i, 0, this.circleCount, this.tileWidth, this.endSize);
        var offset = map(i, 0, this.circleCount, 0, this.endOffset);
        ellipse(offset, 0, diameter, diameter);
      }
      pop();
        
        
        
        //draw circle
    //stroke(0);
      //noFill();
      //beginShape();
      //for(var a = 0; a < TWO_PI; a+=0.01){
          //var r = this.scl;
          //var x = r* cos(a);
          //var y = r* sin(a);
        //  vertex(x,y);
     // }
     // endShape(); 
        
        
        
        
    }
    }
      
      
    
  }
  
  
  
  
  
  
  }



