export default function Sketch(p) {
  let vectorsData = [];
  let vectors = [];
  let activeVectorData;
  let activeVector;
  let specialVectorsData = [];
  let specialVectors = [];

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    vectorsData = props.vectorsData;
    specialVectorsData = props.specialVectorsData;
    activeVectorData = props.vectorsData.filter((vector) => {
      return vector.id == props.activeVectorId;
    })[0];
  };

  p.setup = () => {
    p.createCanvas(window.innerWidth / 2, window.innerHeight / 2);
  };

  p.draw = () => {
    p.background("#242526");

    p.translate(10, window.innerHeight / 2 - 10);
    p.scale(1, -1);

    p.push();
    p.strokeWeight(3);
    p.stroke("white");
    p.line(20, 0, 20, window.innerHeight / 2);
    p.line(0, 20, window.innerWidth / 2, 20);
    p.pop();

    p.noStroke();
    p.fill("black");

    //---- Initialize Vectors and Draw them------
    vectors = vectorsData.map((vectorData) => {
      return new MyVec(vectorData["x"], vectorData["y"], vectorData["color"]);
    });
    vectors.map((vector) => {
      vector.draw();
    });

    //----- Initialalize Special Vectors and Draw Those ----

    // ---- Initialize Active Vector and Draw That----
    activeVector = new MyVec(
      activeVectorData["x"],
      activeVectorData["y"],
      "#0971F1",
      activeVectorData["name"]
    );
    activeVector.draw();
  };

  class MyVec {
    constructor(x, y, c = "white", label = "") {
      this.vec = p.createVector(x, y);
      this.c = c;
      this.label = label;
      this.x = 0;
    }
    draw = () => {
      p.push();
      p.translate(20, 20);
      p.stroke("white");
      p.fill("white");
      p.push();
      p.scale(1, -1);
      p.text(this.label, this.vec.x / 2 + 10, -this.vec.y / 2 + 10);
      p.pop();

      drawArrow(p.createVector(0, 0), this.vec, this.c);
      p.stroke(this.c);
      p.line(0, 0, this.vec.x, this.vec.y);
      p.pop();
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
}
