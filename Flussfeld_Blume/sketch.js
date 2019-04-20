   
'use strict';
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

var inc = 0.1;
//scale
var scl = 30;
var cols, rows;

var zoff = 0;

var fr;
var flowers = [];




var actRandomSeed = 0;






function setup() {
  createCanvas(400, 400);
 
  //flowfield = new Array(cols * rows);
    cols = floor(width/scl);
    rows = floor(height/scl);
  //background(51);
    fr = createP('');
    stroke(0, 128);
}




function draw() {
    background(255);
    //Flow field
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
        
       //draw basic circle here
      flowers[index]= new Flower(x,y,scl,v.heading());
     
     
      xoff += inc;
      stroke(0);
       push();
        translate(x*scl, y*scl);
        rotate(v.heading());
        line(0,0,scl,0);
        
        pop();
    }
    yoff += inc;
    zoff += 0.0004;
  }

//Update view for changing flowers:
    for(var i = 0; i<flowers.length;i++){
    //flowers[i].update();
    flowers[i].show();

 fr.html(floor(frameRate()));
}
}    