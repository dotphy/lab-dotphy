const DISPLAY_SIZE = {
  width:
    window.innerWidth > 700 ? window.innerWidth / 2 : window.innerWidth - 20,
  height: window.innerHeight / 2,
};

let b1;

export default function Sketch(p) {
  p.setup = () => {
    p.createCanvas(window.innerHeight, window.innerWidth);
    b1 = new Ball();
  };

  p.draw = () => {
    p.background("#242526");
    b1.updatePosition();
    b1.updateComponents();
  };

  class Ball {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vec = p.createVector(Math.random(), Math.random());
      this.acc = p.createVector(Math.random() * 0.1, Math.random() * 0.1);
    }

    updatePosition() {
      this.x += this.vec.x;
      this.y += this.vec.y;

      p.push();
      p.stroke("red");
      p.strokeWeight(20);
      p.point(this.x, this.y);
      p.pop();
    }

    updateComponents() {
      p.push();
      p.translate(this.x, this.y);
      p.stroke("white");
      p.line(0, 0, this.vec.x * 100, 0);
      p.triangle(
        this.vec.x * 100,
        -5,
        this.vec.x * 100,
        5,
        this.vec.x * 100 + 7,
        0
      );
      p.line(0, 0, 0, this.vec.y * 100);
      p.triangle(
        -5,
        this.vec.y * 100,
        5,
        this.vec.y * 100,
        0,
        this.vec.y * 100 + 7
      );
      p.pop();
    }
  }
}
