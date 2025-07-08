new p5((p) => {
    class Snowflake {
      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(-100, -10);
        this.size = p.random(4, 8);
        this.speed = p.random(0.5, 1.5);
        this.offset = p.random(1000);
      }
  
      update() {
        this.y += this.speed;
        this.x += p.sin(p.frameCount * 0.02 + this.offset) * 1;
        if (this.y > p.height) {
          this.y = p.random(-100, -10);
          this.x = p.random(p.width);
        }
      }
  
      display() {
        p.fill(255, 255, 255, 200);
        p.noStroke();
        p.ellipse(this.x, this.y, this.size);
      }
    }
  
    let flakes = [];
  
    p.setup = function() {
      let canvas = p.createCanvas(400, 100);
      canvas.parent("winter-animation");
      for (let i = 0; i < 30; i++) {
        flakes.push(new Snowflake());
      }
    };
  
    p.draw = function() {
      p.clear();
      for (let flake of flakes) {
        flake.update();
        flake.display();
      }
    };
  });
  