export let activeVectorAngle = 0;
export default function Sketch(p) {
  let vectorsData = [];
  let vectors = [];
  let activeVectorData;
  let activeVector;
  let operationedVectorsData = [];

  const DISPLAY_SIZE = {
    width:
      window.innerWidth > 700 ? window.innerWidth / 2 : window.innerWidth - 20,
    height: window.innerHeight / 2,
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    vectorsData = props.vectorsData;
    operationedVectorsData = props.operationedVectorsData;
    activeVectorData = props.vectorsData.filter((vector) => {
      return vector.id == props.activeVectorId;
    })[0];
  };

  //SETUP ....
  p.setup = () => {
    p.createCanvas(DISPLAY_SIZE.width, DISPLAY_SIZE.height);
  };

  //Draw.....
  p.draw = () => {
    p.background("#242526");

    shiftOrigin();
    drawAxes();
    drawVectors();
    drawActiveVectors();
    drawOperationed_add();
    drawOperationed_scale();
  };

  // ------------------HELPER DRAWS------------------

  class MyVec {
    constructor(x, y, c = "white", label = "", isActive) {
      this.vec = p.createVector(x, y);
      this.c = c;
      this.label = label;
      this.x = 0;
      this.isActive = isActive;
    }
    draw = () => {
      p.push();
      p.translate(20, 20);
      p.stroke("white");
      p.fill("white");
      p.push();
      p.scale(1, -1);
      p.fill(this.c);
      p.stroke(this.c);
      p.text(this.label, this.vec.x / 2 + 10, -this.vec.y / 2 + 10);
      p.pop();

      this.drawArrow(p.createVector(0, 0), this.vec, this.c);
      p.stroke(this.c);
      p.line(0, 0, this.vec.x, this.vec.y);
      p.pop();
    };
    calculateAngle() {
      activeVectorAngle = this.vec.angleBetween(p.createVector(10, 0));
    }
    add(vec2) {
      let copyVec1 = this.vec;
      let res = copyVec1.add(vec2.vec);
      res = new MyVec(res.x, res.y, "red", `${this.label} + ${vec2.label}`);
      res.draw();
    }
    drawArrow(base, vec, myColor) {
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

  function drawAxes() {
    p.push();
    p.strokeWeight(3);
    p.stroke("gray");
    p.line(20, 0, 20, DISPLAY_SIZE.height);
    p.line(0, 20, DISPLAY_SIZE.width, 20);

    for (let y = 70; y < DISPLAY_SIZE.height; y += 50) {
      p.stroke("gray");
      p.line(18, y, 22, y);
    }
    for (let x = 70; x < DISPLAY_SIZE.width; x += 50) {
      p.line(x, 18, x, 22);
    }

    p.pop();
  }

  function shiftOrigin() {
    p.translate(10, window.innerHeight / 2 - 10);
    p.scale(1, -1);
  }

  function drawVectors() {
    vectors = vectorsData.map((vectorData) => {
      return new MyVec(
        vectorData["x"],
        vectorData["y"],
        vectorData["color"],
        vectorData.name,
        false
      );
    });
    vectors.map((vector) => {
      vector.draw();
    });
  }

  function drawActiveVectors() {
    activeVector = new MyVec(
      activeVectorData["x"],
      activeVectorData["y"],
      "#0479E7",
      activeVectorData["name"],
      true
    );
    p.push();
    p.translate(10, 10);
    p.stroke("#0479E7");
    p.fill("#0479E7");
    p.push();
    p.scale(1, -1);
    p.text(`${activeVector.vec.y} ---`, -20, -activeVectorData.y - 10);
    p.pop();
    p.push();
    p.scale(1, -1);
    p.text(`| \n${activeVector.vec.x}`, activeVector.vec.x + 10, 0);
    p.pop();
    p.pop();
    activeVector.draw();
  }

  function drawOperationed_add() {
    for (let vector of vectorsData) {
      if (vector.operations.length != 0) {
        for (let operation of vector.operations) {
          if (operation.operationName == "add") {
            let vec1 = new MyVec(vector.x, vector.y, "white", vector.name);
            let vec2 = getVectorData(
              operation.operationData.operand,
              vectorsData
            );
            vec2 = new MyVec(vec2.x, vec2.y, "white", vec2.name);
            vec1.add(vec2);
          }
        }
      }
    }
  }
  function drawOperationed_scale() {
    for (let vector of vectorsData) {
      if (vector.operations.length != 0) {
        for (let operation of vector.operations) {
          if (operation.operationName == "scale") {
            vector.x = Math.floor(
              vector.x * operation.operationData.operationValue
            );
            vector.y = Math.floor(
              vector.y * operation.operationData.operationValue
            );
            operation.operationData.operationValue = 1;
          }
        }
      }
    }
  }
}

function getVectorData(id, allObjs) {
  return allObjs.find((obj) => {
    return obj.id == id;
  });
}
