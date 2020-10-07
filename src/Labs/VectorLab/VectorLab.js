import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import { v4 as uuid } from "uuid";
import Sketch from "./Sketch";

import DisplayVectors from "./Components/DisplayVectors";
import "./VectorLab.css";

import AddIcon from "@material-ui/icons/Add";

import { Fab, Slider } from "@material-ui/core";

let displaySize = {
  width:
    window.innerWidth > 700 ? window.innerWidth / 2 : window.innerWidth - 20,
  height: window.innerHeight / 2,
};

export default function VectorLab() {
  const [vectorsData, setVectorsData] = useState([
    {
      id: uuid(),
      name: "V1",
      x: 20,
      y: 20,
      isMouseSensing: false,
      color: "white",
    },
  ]);
  const [specialVectorsData, setSpecialVectorsData] = useState([]);
  const [activeVectorId, setActiveVectorId] = useState(vectorsData[0]["id"]);
  const [operationedVectorsData, setOperationedVectorsData] = useState([]);
  const [x, setX] = useState(2);
  const [isMouseInAddIcon, setIsMouseInAddIcon] = useState(false);

  function handleAddClick(e) {
    //Add a new Vector Randomly
    e.preventDefault();
    setX(x + 1);
    let copyVectorsData = vectorsData.slice();
    copyVectorsData.push({
      id: uuid(),
      name: "V" + String(x),
      x: Math.floor(Math.random() * displaySize.width),
      y: Math.floor(Math.random() * displaySize.height),
      color: "white",
    });
    setVectorsData(copyVectorsData);
  }

  function handleActiveVector(id) {
    setActiveVectorId(id);
  }

  function hanldeXCompChange(e, newValue, id) {
    let copyVectorsData = vectorsData.slice();
    let inter = copyVectorsData.find((vector) => {
      return vector.id == id;
    });
    inter.x = newValue;
  }

  function handleYCompChange(e, newValue, id) {
    let copyVectorsData = vectorsData.slice();
    let inter = copyVectorsData.find((vector) => {
      return vector.id == id;
    });
    inter.y = newValue;
  }

  return (
    <div className="vectorlab">
      <P5Wrapper
        sketch={Sketch}
        vectorsData={vectorsData}
        activeVectorId={activeVectorId}
        operationedVectorsData={operationedVectorsData}
      />
      <div style={{ marginRight: "10px" }}>
        <DisplayVectors
          vectorsData={vectorsData}
          activeVectorId={activeVectorId}
          handleActiveVector={handleActiveVector}
          hanldeXCompChange={hanldeXCompChange}
          handleYCompChange={handleYCompChange}
        />
        <div className="vectorlab__input">
          <Fab
            onClick={handleAddClick}
            variant="extended"
            color="secondary"
            onMouseEnter={() => {
              setIsMouseInAddIcon(true);
            }}
            onMouseLeave={() => setIsMouseInAddIcon(false)}
          >
            <AddIcon className="vactorlab_input_icon" />
            {isMouseInAddIcon && "Add a new Vector"}
          </Fab>
        </div>
      </div>
    </div>
  );
}
