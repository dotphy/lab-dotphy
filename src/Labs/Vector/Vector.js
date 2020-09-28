import { Vector } from "p5";
import React from "react";
import P5Wrapper from "react-p5-wrapper";
import Sketch from "./Sketch";

export default function VectorLab() {
  return (
    <div>
      <P5Wrapper sketch={Sketch} />
    </div>
  );
}
