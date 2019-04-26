// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
let bounds;
var bubbles = [];
var spots;

function preload() {
  font = loadFont('Montserrat-Bold.otf');
}

function setup() {
  createCanvas(600, 300);
  background(0,0,0);
  textFont(font);
   textSize(width/3);
   fill(255);
    textAlign(CENTER, CENTER);
   //noStroke();
   text('Aqua', width/2, height/2);

  var points = font.textToPoints('Aqua', 60, 200, 150, {
    sampleFactor: 0.1
      //sampleFactor: 5,simplifyThreshold: 0
  });
  
    
    //check brigthness og canvas inorder to fill text with bubbles
    loadPixels();

    spots = [];
    
      for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
          var index = x + y * width;
          var c = pixels[index*4];
        //save vector of text    
          var b = brightness([c]);
          if (b > 1) {
            spots.push(createVector(x, y));
          }
        }

     } 
    
    
    
   //do not fill all spots due to runtime and metaballs 
  for (var i = 0; i < spots.length; i= i+20) {
    var p = spots[i];
    let a = random(0,10);
    let xoff = cos(a)+1;
    let yoff = sin(a)+1;
    var r_size = map(noise(xoff, yoff),0,1,1,28);  
    //console.log(r_size);
    var bubble = new Bubble(p.x, p.y, r_size);
    bubbles.push(bubble);
      
      
 //vertex(p.x * width / bounds.w , p.y * height / bounds.h);
   // vertex(p.x , p.y);
  }
    
    
}
 

 
      
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  
    
    


function draw() {
  background(0,0,255);
  for (var i = 0; i < bubbles.length; i++) {
    var b = bubbles[i];
    b.behaviors();
    b.update();
    b.show();
  }
    
    
}
