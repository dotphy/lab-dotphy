import React from "react";
import Sketch from "./Sketch";
import P5Wrapper from "react-p5-wrapper";

import "./KinematicsLab.css";

export default function KinematicsLab() {
  return (
    <div className="kinematicslab">
      <P5Wrapper sketch={Sketch} />
    </div>
  );
}
