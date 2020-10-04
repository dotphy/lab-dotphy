import { Vector } from "p5";
import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import { v4 as uuid } from "uuid";
import Sketch from "./Sketch";
import "./VectorLab.css";

import AddIcon from "@material-ui/icons/Add";
import { Fab, Button } from "@material-ui/core";

function DisplayVectorsTab(props) {
  return (
    <div className="displayvectorstab">
      <div className="displayvectorstab__name">{props.vectorsData.name} </div>
      <div className="displayvectorstab__data">
        <div className="displayvectorstab__data__xcomp">
          <p> X Comp</p>
          {props.vectorsData.x}
        </div>
        <div className="displayvectorstab__data__ycomp">
          <p> Y Comp </p>
          {props.vectorsData.y} j
        </div>
      </div>
      <div></div>
    </div>
  );
}
function DisplayVectors(props) {
  return (
    <div className="displayvectors">
      {props.vectorsData.map((vectorsData) => {
        return <DisplayVectorsTab vectorsData={vectorsData} />;
      })}
    </div>
  );
}

export default function VectorLab() {
  const [vectorsData, setVectorsData] = useState([
    { name: "vector", x: 20, y: 20, isMouseSensing: false, color: "white" },
  ]);
  const [inputVector, setInputVector] = useState({ x: 0, y: 0 });

  function handleAddClick(e) {
    e.preventDefault();
    let copyVectorsData = vectorsData.slice();
    copyVectorsData.push({
      id: uuid(),
      name: "Vector",
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
      color: "white",
    });
    setVectorsData(copyVectorsData);
  }

  return (
    <div className="vectorlab">
      <P5Wrapper sketch={Sketch} vectorsData={vectorsData} />
      <DisplayVectors vectorsData={vectorsData} />
      <div className="vectorlab__input">
        <Fab>
          <AddIcon onClick={handleAddClick} />
        </Fab>
      </div>
    </div>
  );
}
