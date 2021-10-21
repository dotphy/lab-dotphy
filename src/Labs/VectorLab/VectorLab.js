import React, { useState, useEffect } from "react";
import P5Wrapper from "react-p5-wrapper";
import {Helmet } from "react-helmet";
import { v4 as uuid } from "uuid";
import Sketch from "./Sketch";
import Operation from "../../Components/Operations/Operation";
import "./VectorLab.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab, Slider } from "@material-ui/core";
import { SvgSlider } from "../../Assets/icons";

let value = 0;

const DISPLAY_SIZE = {
  width:
    window.innerWidth > 700 ? window.innerWidth / 2 : window.innerWidth - 20,
  height: window.innerHeight / 2,
};

function randomVector(name) {
  return {
    id: uuid(),
    name: name,
    x: Math.floor(Math.random() * (DISPLAY_SIZE.width/1.2)),
    y: Math.floor(Math.random() * DISPLAY_SIZE.height),
    color: "white",
    operations: [],
  };
}

function getVectorData(id, allObjs) {
  return allObjs.find((obj) => {
    return obj.id === id;
  });
}
function isDesktop() {
  return DISPLAY_SIZE.width > 700;
}

function DisplayVectorsTab({
  vectorData,
  vectorsData,
  activeVectorId,
  handleActiveVector,
  hanldeXCompChange,
  handleYCompChange,
  deleteVector,
  addOperation,
}) {
  //Conditionally Rendered Compoenents ...

  let xComp = <p className="numbers">{String(vectorData.x) + " units"}</p>;
  let yComp = <p className="numbers">{String(vectorData.y) + " units"}</p>;
  let operations = <div></div>;
  if (vectorData.id === activeVectorId) {
    xComp = (
      <Slider
        value={vectorData.x}
        onChange={(e, newValue) => {
          hanldeXCompChange(e, newValue, vectorData.id);
        }}
        min={0}
        max={DISPLAY_SIZE.width - 100}
        valueLabelDisplay="auto"
      />
    );
    yComp = (
      <Slider
        value={vectorData.y}
        onChange={(e, newValue) => {
          handleYCompChange(e, newValue, vectorData.id);
        }}
        min={0}
        max={DISPLAY_SIZE.height - 100}
        valueLabelDisplay="auto"
      />
    );
    operations = (
      <div className="displayvectorstab__data__operations">
        <Operation
          vectorData={vectorData}
          vectorsData={vectorsData}
          addOperation={addOperation}
        />
      </div>
    );
  }

  return (
    <div
      className="displayvectorstab"
      onClick={() => {
        handleActiveVector(vectorData.id);
      }}
    >
      <div className="displayvectorstab__name">
        <p>{vectorData.name}</p>
        <Fab className="displayvectorstab__deleteicon">
          <DeleteIcon
            onClick={() => {
              deleteVector(vectorData.id);
            }}
          />
        </Fab>
      </div>
      <div className="displayvectorstab__data">
        <div className="displayvectorstab__data__xcomp">
          <p className="displayvectorstab__data__xcomp__label">
            Horizontal Component
          </p>
          {xComp}
        </div>
        <div className="displayvectorstab__data__ycomp">
          <p> Vertical Component </p>
          {yComp}
        </div>
        <div className="displayvectorstab__data__angle">
          <div>
            Angle
          </div>
          <div className="displayvectorstab__data__angle-text">
            {Math.floor(
              (Math.atan(vectorData.y / vectorData.x) * 180) / Math.PI
            )}
            <sup> °</sup>
          </div>
        </div>
        <div>{operations}</div>
      </div>
    </div>
  );
}

function DisplayVectors({
  vectorsData,
  activeVectorId,
  handleActiveVector,
  hanldeXCompChange,
  handleYCompChange,
  addOperation,
  deleteVector,
  className,
  addNewVector
}) {
  return (
    <div className={`displayvectors ${className}`}>
      {vectorsData.map((vectorData) => {
        return (
          <DisplayVectorsTab
            vectorData={vectorData}
            vectorsData={vectorsData}
            activeVectorId={activeVectorId}
            handleActiveVector={handleActiveVector}
            hanldeXCompChange={hanldeXCompChange}
            handleYCompChange={handleYCompChange}
            addOperation={addOperation}
            deleteVector={deleteVector}
            key={vectorData.id}
          />
        );
      })}
    </div>
  );
}

export default function VectorLab() {
  const [num, setNum] = useState(2);
  const [vectorsData, setVectorsData] = useState([randomVector("V1")]);
  const [activeVectorId, setActiveVectorId] = useState(vectorsData[0]["id"]);
  const [isSliderActive, setSliderStatus] = useState(false);

  function addNewVector(e) {
    setNum(num + 1);
    e.preventDefault();
    let copyVectorsData = vectorsData.slice();
    copyVectorsData.push(randomVector("V" + String(num)));
    setVectorsData(copyVectorsData);
  }

  function addOperation(e, v1_id, v2_id, operationName, operationValue) {
    //Apply a operation on a specific vector
    e.preventDefault();
    let copyVectorsData = vectorsData.slice();
    let v1 = getVectorData(v1_id, copyVectorsData);
    v1["operations"].push({
      operationName,
      operationData: { operand: v2_id, operationValue: operationValue },
    });
    setVectorsData(copyVectorsData);
  }

  function handleActiveVector(id) {
    setActiveVectorId(id);
  }

  function hanldeXCompChange(e, newValue, id) {
    let copyVectorsData = [];
    for (let vectorData of vectorsData) {
      copyVectorsData.push(Object.assign({}, vectorData));
    }
    copyVectorsData.find((vector) => {
      return vector.id === id;
    }).x = newValue;
    setVectorsData(copyVectorsData);
  }

  function handleYCompChange(e, newValue, id) {
    let copyVectorsData = [];
    for (let vectorData of vectorsData) {
      copyVectorsData.push(Object.assign({}, vectorData));
    }
    copyVectorsData.find((vector) => {
      return vector.id === id;
    }).y = newValue;
    setVectorsData(copyVectorsData);
  }
  function handleSliderClick() {
    setSliderStatus(!isSliderActive);
  }

  function deleteVector(id) {
    let copyVectors = vectorsData.slice();
    copyVectors.map((vector, index) => {
      if (vector.id == id) {
        copyVectors.splice(index, 1);
      }
    });
    setVectorsData(copyVectors);
  }

  return (
    <React.Fragment>
      <div className="vectorlab">
    <Helmet> <title> VectorLab - Dotphy</title></Helmet>
        <div>
          <P5Wrapper
            sketch={Sketch}
            vectorsData={vectorsData}
            activeVectorId={activeVectorId}
          />
        </div>
        <div style={{ marginRight: "10px" }} className="vectorlab__control-pannel">
          <DisplayVectors
            vectorsData={vectorsData}
            activeVectorId={activeVectorId}
            handleActiveVector={handleActiveVector}
            hanldeXCompChange={hanldeXCompChange}
            handleYCompChange={handleYCompChange}
            addOperation={addOperation}
            deleteVector={deleteVector}
            addNewVector={addNewVector}
            className={
              isSliderActive ? "displayvector-open" : "displayvector-close"
            }
          />
          <SvgSlider
            className={`svg-slider ${
              isSliderActive ? "svg-slider-on" : "svg-slider-off"
            }`}
            onClick={handleSliderClick}
          />
          <button style={{fontSize:"1.1em"}} onClick={addNewVector} className="displayvector__button">Add A  New Vector </button>
        </div>
      </div>
    </React.Fragment>
  );
}
