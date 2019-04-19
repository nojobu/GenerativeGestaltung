// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(51);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  fr.html(floor(frameRate()));
}

function drawDeformedCircle(ctx: CanvasRenderingContext2D,
                                   circle: {x: number, y: number, radius: number},
                                   frequency: number,
                                   magnitude: number,
                                   seed: number = 0): void {
	ctx.beginPath();

	// Sample points evenly around the circle
	samples = floor(4 * circle.radius + 20);
	for (let j = 0; j < samples + 1; ++j) {
		angle = (2 * PI * j) / samples;

		// Figure out the x/y coordinates for the given angle
		y = sin(angle);
		x = cos(angle);

		// Randomly deform the radius of the circle at this point
		deformation = noise.noise3D(x * frequency,
										  y * frequency,
										  seed) + 1;
		radius = circle.radius * (1 + magnitude * deformation);

		// Extend the circle to this deformed radius
		ctx.lineTo(circle.x + radius * x,
				   circle.y + radius * y);
	}
	ctx.fill();
	ctx.stroke();
}