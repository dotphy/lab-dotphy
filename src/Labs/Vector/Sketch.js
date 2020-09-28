export default function Sketch(p) {
  class MyVec {
    constructor(x, y, isMouseSensing = false, c = "white") {
      this.vec = p.createVector(x, y);
      this.c = c;
      this.isMouseSensing = isMouseSensing;
    }
    draw = () => {
      if (this.isMouseSensing) {
        this.vec = p.createVector(p.mouseX, p.mouseY);
      }
      drawArrow(p.createVector(0, 0), this.vec, this.c);
      p.stroke(this.c);
      p.line(0, 0, this.vec.x, this.vec.y);
    };
    add(vec2) {
      let copyVec1 = this.vec;
      let res = copyVec1.add(vec2.vec);
      return new MyVec(res.x, res.y, false, "red");
    }
  }
  function drawArrow(base, vec, myColor) {
    p.push();
    p.stroke(myColor);
    p.strokeWeight(3);
    p.fill(myColor);
    p.translate(base.x, base.y);
    p.line(0, 0, vec.x, vec.y);
    p.rotate(vec.heading());
    let arrowSize = 7;
    p.translate(vec.mag() - arrowSize, 0);
    p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    p.pop();
  }

  let v1;
  let v2;
  let res;

  p.setup = () => {
    p.createCanvas(window.innerWidth / 2, window.innerHeight / 2);
    v1 = new MyVec(0, 0, true);
    v2 = new MyVec(window.innerWidth / 4, window.innerHeight / 4, false);
  };

  p.draw = () => {
    p.background("#242526");

    v2.draw();
    v1.draw();

    res = v1.add(v2);
    res.draw();
  };
}
