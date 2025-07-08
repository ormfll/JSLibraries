new p5((p) => {
    class Leaf {
      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(-100, -10);
        this.size = p.random(10, 20);
        this.speed = p.random(1, 2);
        this.angle = p.random(p.TWO_PI);
        this.offset = p.random(1000);
      }
  
      update() {
        this.y += this.speed;
        this.x += p.sin(p.frameCount * 0.02 + this.offset) * 1.5;
        if (this.y > p.height) {
          this.y = p.random(-100, -10);
          this.x = p.random(p.width);
        }
      }
  
      display() {
        p.push();
        p.translate(this.x, this.y);
        p.rotate(this.angle);
        p.fill(255, 165, 0, 200);
        p.noStroke();
        p.ellipse(0, 0, this.size, this.size * 1.5);
        p.pop();
      }
    }
  
    let leaves = [];
  
    p.setup = function() {
      let canvas = p.createCanvas(400, 100);
      canvas.parent("autumn-animation");
      for (let i = 0; i < 20; i++) {
        leaves.push(new Leaf());
      }
    };
  
    p.draw = function() {
      p.clear();
      for (let leaf of leaves) {
        leaf.update();
        leaf.display();
      }
    };
  });
  