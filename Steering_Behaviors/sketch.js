// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
let bounds;
var vehicles = [];

function preload() {
  font = loadFont('Montserrat-Bold.otf');
}

function setup() {
  createCanvas(600, 300);
  background(0,0,255);
  // textFont(font);
  // textSize(192);
   fill(255);
   //noStroke();
   text('train', 100, 200);

  var points = font.textToPoints('blub', 90, 200, 192, {
    sampleFactor: 0.1
      //sampleFactor: 5,simplifyThreshold: 0
  });
    bounds = font.textBounds('blub', 90, 200, 192);

  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    let a = random(0,10);
    let xoff = cos(a)+1;
    let yoff = sin(a)+1;
    var r_size = map(noise(xoff, yoff),0,1,1,28);  
    //console.log(r_size);
    var vehicle = new Vehicle(p.x, p.y, r_size);
    vehicles.push(vehicle);
      
      
      
      stroke(0);
    fill(255, 104, 204);
      beginShape();
  //translate(-bounds.x * width / bounds.w, -bounds.y * height / bounds.h);
 
    vertex(
      p.x * width / bounds.w ,p.y * height / bounds.h);
  }
  endShape(CLOSE);
      
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  
    
    
}

function draw() {
  background(0,0,255);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
    
    stroke(0);
  fill(255, 104, 204);
    
    
}
