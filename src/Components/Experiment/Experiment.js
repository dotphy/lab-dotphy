import React from "react";
import ReactDOM from "react-dom";
import dotphy from "../../Assets/dotphy.png";
import "./Experiment.css";

export function Experiment(props) {
  return (
    <div className={`Experiment ${props.className}`}>
      <img src={dotphy} className="Experiment__Dotphy" id={"logo"} />
    </div>
  );
}
