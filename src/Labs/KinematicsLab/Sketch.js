const DISPLAY_SIZE = {
  width:
    window.innerWidth > 700 ? window.innerWidth / 2 : window.innerWidth - 20,
  height: window.innerHeight / 2,
};

export default function Sketch(p) {
  let objectsData = [];
  let objects = [];
  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    objectsData = props.objectsData;
  };

  p.setup = () => {
    p.createCanvas(window.innerHeight, window.innerWidth);
    for (let objectData of objectsData) {
      objects.push(
        new Ball(objectData.x, objectData.y, objectData.vecx, objectData.vecy)
      );
    }
  };

  p.draw = () => {
    p.background("#242526");

    for (let object of objects) {
      object.updatePosition();
      object.updateComponents();
    }
  };

  class Ball {
    constructor(x = 0, y = 0, vecx, vecy) {
      this.x = x;
      this.y = y;
      this.vec = p.createVector(vecx, vecy);
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
