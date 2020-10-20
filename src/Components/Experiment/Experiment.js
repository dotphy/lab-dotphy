import React from "react";
import ReactDOM from "react-dom";
import dotphy from "../../Assets/dotphy.png";
import "./Experiment.css";
import VectorLab from "../../Labs/VectorLab/VectorLab";

export default function Experiment() {
  return (
    <div className="experiment">
      <VectorLab />
    </div>
  );
}
