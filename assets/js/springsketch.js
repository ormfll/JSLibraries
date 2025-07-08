new p5((p) => {
    class Petal {
      constructor() {
        this.x = p.random(p.width);
        this.y = p.random(-100, -10);
        this.size = p.random(10, 20);
        this.speed = p.random(1, 2);
        this.angle = p.random(p.TWO_PI);
        this.rotationSpeed = p.random(-0.05, 0.05);
      }
  
      update() {
        this.y += this.speed;
        this.angle += this.rotationSpeed;
        if (this.y > p.height) {
          this.y = p.random(-100, -10);
          this.x = p.random(p.width);
        }
      }
  
      display() {
        p.push();
        p.translate(this.x, this.y);
        p.rotate(this.angle);
        p.fill(255, 182, 193, 180);
        p.noStroke();
        p.ellipse(0, 0, this.size, this.size * 1.5);
        p.pop();
      }
    }
  
    let petals = [];
  
    p.setup = function() {
      let canvas = p.createCanvas(400, 100);
      canvas.parent("spring-animation");
      for (let i = 0; i < 20; i++) {
        petals.push(new Petal());
      }
    };
  
    p.draw = function() {
      p.clear();
      for (let petal of petals) {
        petal.update();
        petal.display();
      }
    };
  });
  