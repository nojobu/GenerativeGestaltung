// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
let bounds;
var bubbles = [];
var spots;
var arrowMouse; 
var water;
 
// moving bodies
let extrabubbles = [];

function preload() {
  font = loadFont('Montserrat-Bold.otf');
  // cursor img: https://www.freeiconspng.com/uploads/fish-png-11.png
arrowMouse = loadImage("fish.png");
}

function setup() {
  createCanvas(600, 300);
     //cursor(arrowMouse);
    
  background(0,0,0);
  textFont(font);
   textSize(width/3);
   fill(255);  
    textAlign(CENTER, CENTER);
   //for filling the text with bubbles
   text('Aqua', width/2, height/2);
  var points = font.textToPoints('Aqua', 60, 200, 150, {sampleFactor: 0.1});
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
    
   //do not fill all spots due to runtime
  for (var i = 0; i < spots.length; i= i+46) {
    var p = spots[i];
    let a = random(0,10);
    let xoff = cos(a)+1;
    let yoff = sin(a)+1;
    var r_size = map(noise(xoff, yoff),0,1,1,28);  
    //console.log(r_size);
    var bubble = new Bubble(p.x, p.y, r_size,2.0, true);
    bubbles.push(bubble);
 //vertex(p.x * width / bounds.w , p.y * height / bounds.h);
   // vertex(p.x , p.y);
  }
    
//code for water object from: https://p5js.org/examples/simulate-forces.html    
// Create water
 water = new Water(0, height/5, width, height, 0.1);
background(255,255,255);
    cursor(arrowMouse);
      
}
 

 
  
    
    


function draw() {
    
//image(arrowMouse, mouseX, mouseY,20,30);
      
    background(255,255,255);
    background('rgba(0%,0%,100%,0.05)');
    cursor(arrowMouse);

  // Draw water
  water.display();
    
    

   
        
        
    
  for (var i = 0; i < bubbles.length; i++) {
       var b = bubbles[i];
      // Is the Mover in the liquid?
    if (water.contains(b)) {
      // Calculate drag force
      let dragForce = water.calculateDrag(b);
      // Apply drag force to bubble
      b.applyForce(dragForce);
    }

    // Gravity is scaled by mass
    let gravity = createVector(0, -0.1 * b.mass);
    
    // Apply gravity
    b.applyForce(gravity);
      
    b.behaviors();
    
   
    b.update();
      
    b.show();
       
  }
    
    
    
    
    
    for (let i = 0; i < 3; i++) {
        let r = random(1,10);
    var eb = new Bubble(random(0,width), height,r,r,false);
    extrabubbles.push(eb);
  }
    
   
    for (var i = 0; i < extrabubbles.length; i++) {
       var eb = extrabubbles[i];
        // Is the Mover in the liquid?
        if (water.contains(eb)) {
          // Calculate drag force
          let dragForce = water.calculateDrag(eb);
          // Apply drag force to bubble
          eb.applyForce(dragForce);
        }
        // Bubbel up behavior 
    let airforce = createVector(0, -0.5 * eb.mass);
    
    // Apply gravity
    eb.applyForce(airforce);
    
    
   eb.behaviors();
    eb.update();
      
    eb.show();
    }
    
    
    
  cursor(arrowMouse);
}
