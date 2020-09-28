import { Vector } from "p5";
import React from "react";
import P5Wrapper from "react-p5-wrapper";
import Sketch from "./Sketch";
import "./VectorLab.css";

export default function VectorLab() {
  return (
    <div className="vectorlab">
      <P5Wrapper sketch={Sketch} />
    </div>
  );
}
