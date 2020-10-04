export default function Sketch(p) {
  class MyVec {
    constructor(x, y, c = "white") {
      this.vec = p.createVector(x, y);
      this.c = c;
    }
    draw = () => {
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

  let vectorsData = [];
  let vectors = [];
  let activeVectorData;
  let activeVector;

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    vectorsData = props.vectorsData;
    activeVectorData = props.vectorsData.filter((vector) => {
      return vector.id == props.activeVectorId;
    })[0];
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth / 2, window.innerHeight / 2);
  };

  p.draw = () => {
    p.background("#242526");
    let inter = vectorsData.map((vectorData) => {
      return new MyVec(vectorData["x"], vectorData["y"], vectorData["color"]);
    });

    activeVector = new MyVec(
      activeVectorData["x"],
      activeVectorData["y"],
      "red"
    );

    inter.map((vector) => {
      vector.draw();
    });
    activeVector.draw();
  };
}
