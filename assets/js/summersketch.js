new p5((p) => {
    p.setup = function() {
      let canvas = p.createCanvas(400, 100);
      canvas.parent("summer-animation");
    };
  
    p.draw = function() {
      p.clear();
      p.translate(p.width / 2, p.height / 2);
      let rays = 20;
      let angleStep = p.TWO_PI / rays;
      let time = p.sin(p.frameCount * 0.05) * 20 + 60;
  
      p.stroke(255, 204, 0, 180);
      p.strokeWeight(3);
      for (let i = 0; i < rays; i++) {
        p.push();
        p.rotate(angleStep * i);
        p.line(0, 0, time, 0);
        p.pop();
      }
  
      p.fill(255, 204, 0, 180);
      p.noStroke();
      p.ellipse(0, 0, 20, 20);
    };
  });
  