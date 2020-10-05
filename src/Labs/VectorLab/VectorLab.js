import { Vector } from "p5";
import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import { v4 as uuid } from "uuid";
import Sketch from "./Sketch";
import Operation from "./Components/Operation";
import "./VectorLab.css";

import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { Fab, Slider } from "@material-ui/core";

function DisplayVectorsTab({
  vectorsData,
  activeVectorId,
  handleActiveVector,
  hanldeXCompChange,
  handleYCompChange,
}) {
  let xComp = <p className="numbers">{String(vectorsData.x) + " units"}</p>;
  let yComp = <p className="numbers">{String(vectorsData.x) + " units"}</p>;
  let operations = <div> </div>;

  if (vectorsData.id == activeVectorId) {
    xComp = (
      <Slider
        defaultValue={vectorsData.x}
        onChange={(e, newValue) => {
          hanldeXCompChange(e, newValue, vectorsData.id);
        }}
        min={0}
        max={500}
        valueLabelDisplay="auto"
      />
    );
    yComp = (
      <Slider
        defaultValue={vectorsData.y}
        onChange={(e, newValue) => {
          handleYCompChange(e, newValue, vectorsData.id);
        }}
        min={0}
        max={500}
        valueLabelDisplay="auto"
      />
    );
    operations = <Operation />;
  }

  return (
    <div
      className="displayvectorstab"
      onClick={() => {
        handleActiveVector(vectorsData.id);
      }}
    >
      <div className="displayvectorstab__name">
        <p>{vectorsData.name} </p>

        <EditIcon />
      </div>
      <div className="displayvectorstab__data">
        <div className="displayvectorstab__data__xcomp">
          <p> Horizontal Comp</p>
          {xComp}
        </div>
        <div className="displayvectorstab__data__ycomp">
          <p> Vertical Comp </p>
          {yComp}
        </div>
        <div className="displayvectorstab__data__operations">{operations}</div>
      </div>
      <div></div>
    </div>
  );
}
function DisplayVectors({
  vectorsData,
  activeVectorId,
  handleActiveVector,
  hanldeXCompChange,
  handleYCompChange,
}) {
  return (
    <div className="displayvectors">
      {vectorsData.map((vectorsData) => {
        return (
          <DisplayVectorsTab
            vectorsData={vectorsData}
            activeVectorId={activeVectorId}
            handleActiveVector={handleActiveVector}
            hanldeXCompChange={hanldeXCompChange}
            handleYCompChange={handleYCompChange}
          />
        );
      })}
    </div>
  );
}

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
  let x = 1;
  const [activeVectorId, setActiveVectorId] = useState(vectorsData[0]["id"]);
  //#TODO:Add New Vectors Based on user Input
  const [inputVector, setInputVector] = useState({ x: 0, y: 0 });

  function handleAddClick(e) {
    //Add a new Vector Randomly
    e.preventDefault();
    let copyVectorsData = vectorsData.slice();
    copyVectorsData.push({
      id: uuid(),
      name: "V" + String(x++),
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500),
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
      />
      <div style={{ marginRight: "30px" }}>
        <DisplayVectors
          vectorsData={vectorsData}
          activeVectorId={activeVectorId}
          handleActiveVector={handleActiveVector}
          hanldeXCompChange={hanldeXCompChange}
          handleYCompChange={handleYCompChange}
        />
        <div className="vectorlab__input">
          <Fab>
            <AddIcon onClick={handleAddClick} />
          </Fab>
        </div>
      </div>
    </div>
  );
}
