

function Flower(pos_x, pos_y, scl, vec_head) {
    
    //Scale
    this.scl = scl;
    //position
    this.pos = createVector(pos_x, pos_y);
    
    
    //frequency
  this.frq = createVector(0, 0);
    //magnitude
  this.mag = createVector(0, 0);
  

 //https://editor.p5js.org/generative-design/sketches/P_2_1_3_01

this.count = 0;
this.tileCountX = 10;
this.tileCountY = 10;
this.tileWidth = width / this.tileCountX ;
this.tileHeight = height / this.tileCountY;


this.circleCount = 0;
this.endSize = 0;
this.endOffset = 0;

this.actRandomSeed = 0;
    
// Draws a single flower into a canvas context ctx
//drawFlower(ctx, {x: width / 2, y: height / 2, radius}, 8.72, 0.07, 0.15, 0.99, 500);
    
    
    

  this.update = function() {
   // this.pos.add(this.vel);
  }
  
  this.show = function() {
      noFill();
  
    //ellipse(this.pos.x*this.scl, this.pos.y*this.scl,this.scl,this.scl);
    
   
      
translate(this.tileWidth / 2, this.tileHeight / 2);
  //translate(this.scl / 2, this.scl/ 2);
     //Circleamout                   
    this.circleCount = mouseX/ 10 + 1;
      this.endSize = map(mouseX, 0, max(width, mouseX), this.tileWidth / 2, 0);
  this.endOffset = map(mouseY, 0, max(height, mouseY), 0, (this.tileWidth - this.endSize) / 2);
     
     //draw grid 
    for (var gridY = 0; gridY <= this.tileCountY; gridY++) {
    for (var gridX = 0; gridX <= this.tileCountX; gridX++) {
        
      push();
     translate(this.tileWidth * gridX, this.tileHeight * gridY);
    // translate(this.scl * gridX, this.scl * gridY);
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
          
        //draw circle
          //ellipse(offset, 0, diameter, diameter);
          //ellipse(x, y, w, [h])
  stroke(0);
      noFill();
     beginShape();
      for(var a = 0; a < TWO_PI; a+=0.01){
          var r = diameter/2;
          var x = r* cos(a);
          var y = r* sin(a);
       vertex(x,y);
      }
      endShape(); 
          
          
        /*beginShape();
  // first controlpoint
  curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY);

  // only these points are drawn
  for (var i = 0; i < formResolution; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlpoint
  curveVertex(x[1] + centerX, y[1] + centerY);
  endShape();  */
          
        
    
      }
      pop();
        
        
        
        
        
        
        
    }
    }
      
      
    
  }
  
  
  
  
  
  
  }



