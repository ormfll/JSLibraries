let angle = 0;

function setup() {
  let canvas = createCanvas(200, 300);
  canvas.parent('flamingo-canvas');
}

function draw() {
  clear();
  translate(width / 2, height / 2 + 40);
  rotate(sin(angle) * 0.05);

  drawFlamingo();
  angle += 0.02;
}

function drawFlamingo() {
  // Lifeguard ring
  noStroke();
  fill(255, 182, 193, 180);
  ellipse(0, 0, 120, 80);
  fill(255);
  ellipse(0, 0, 70, 40);

  // Body
  fill(255, 105, 180);
  ellipse(0, -10, 60, 40);

  // Neck
  stroke(255, 105, 180);
  strokeWeight(8);
  noFill();
  beginShape();
  curveVertex(-5, -20);
  curveVertex(-5, -20);
  curveVertex(-10, -60);
  curveVertex(0, -110);
  curveVertex(20, -140);
  curveVertex(35, -150);
  endShape();

  // Head
  noStroke();
  fill(255, 105, 180);
  ellipse(35, -150, 22, 22);

  // Eye
  fill(255);
  ellipse(37, -153, 5, 5);
  fill(0);
  ellipse(37, -153, 2, 2);

  // Beak
  fill(0);
  triangle(43, -150, 53, -145, 43, -140);
}
