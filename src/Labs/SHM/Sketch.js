export default function Sketch(p) {
  let p1;
  let objectData = {
    freqX: 1000,
    freqY: 1000,
  };
  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    objectData = props.objectData;
  };
  p.setup = () => {
    p.createCanvas(window.innerWidth / 1.2, window.innerHeight);
  };

  p.draw = () => {
    p1 = new Particle(objectData.freqX, objectData.freqY);
    p1.updatePosition(objectData.freqX, objectData.freqY);
  };

  class Particle {
    constructor(freqX, freqY) {
      this.freqX = freqX;
      this.freqY = freqY;
    }

    updatePosition(freqX, freqY) {
      p.push();
      p.stroke("white");
      p.strokeWeight(3);
      p.translate(window.innerWidth / 2, window.innerHeight / 2);
      p.translate(
        Math.sin(p.millis() / this.freqX) * 200,
        Math.cos(p.millis() / this.freqY) * 200
      );
      p.point(0, 0);
      p.pop();
    }
  }
}
