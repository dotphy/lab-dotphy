import { Vector } from "p5";
import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import { v4 as uuid } from "uuid";
import Sketch from "./Sketch";
import Operation from "./Components/Operation";
import Controls from "../../Components/Controls/Controls"
import "./VectorLab.css";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import { Fab, Slider } from "@material-ui/core";
import {SvgSlider} from "../../Assets/icons"

const DISPLAY_SIZE = {
  width:
    window.innerWidth > 700 ? window.innerWidth / 2 : window.innerWidth - 20,
  height: window.innerHeight / 2,
};

function randomVector(name) {
  return {
    id: uuid(),
    name: name,
    x: Math.floor(Math.random() * DISPLAY_SIZE.width),
    y: Math.floor(Math.random() * DISPLAY_SIZE.height),
    color: "white",
    operations: [],
  };
}

function getVectorData(id, allObjs) {
  return allObjs.find((obj) => {
    return obj.id == id;
  });
}
function isDesktop(){
  return DISPLAY_SIZE.width > 700;
}

function DisplayVectorsTab({
  vectorData,
  vectorsData,
  activeVectorId,
  handleActiveVector,
  hanldeXCompChange,
  handleYCompChange,
  addOperation,
}) {
  //Conditionally Rendered Compoenents ...

  let xComp = <p className="numbers">{String(vectorData.x) + " units"}</p>;
  let yComp = <p className="numbers">{String(vectorData.y) + " units"}</p>;
  let operations = <div></div>;
  if (vectorData.id == activeVectorId) {
    xComp = (
      <Slider
        defaultValue={vectorData.x}
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
        defaultValue={vectorData.y}
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
        <EditIcon />
      </div>
      <div className="displayvectorstab__data">
        <div className="displayvectorstab__data__xcomp">
          <p className="displayvectorstab__data__xcomp__label">
            {" "}
            Horizontal Component
          </p>
          {xComp}
        </div>
        <div className="displayvectorstab__data__ycomp">
          <p> Vertical Component </p>
          {yComp}
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
  className
}) {
  return (
    <div className={`displayvectors ${className}` } >
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
  const [isMouseInAddIcon, setIsMouseInAddIcon] = useState(false);
  const [isSliderActive, setSliderStatus] = useState(false);

  function addNewVector(e) {
    //Add a new Vector Randomly
    setNum(num + 1);
    e.preventDefault();
    let copyVectorsData = vectorsData.slice();
    copyVectorsData.push(randomVector("V" + String(num)));
    setVectorsData(copyVectorsData);
  }

  function addOperation(e, v1_id, v2_id, operationName, operationValue) {
    e.preventDefault();
    let copyVectorsData = vectorsData.slice();
    let v1 = getVectorData(v1_id, copyVectorsData);
    v1["operations"].push({ operationName, operationData :{operand : v2_id , operationValue : operationValue }});
    setVectorsData(copyVectorsData);
  }

  function handleActiveVector(id) {
    setActiveVectorId(id);
  }

  function hanldeXCompChange(e, newValue, id) {
    let copyVectorsData = vectorsData.slice();
    copyVectorsData.find((vector) => {
      return vector.id == id;
    }).x = newValue;
  }

  function handleYCompChange(e, newValue, id) {
    let copyVectorsData = vectorsData.slice();
    copyVectorsData.find((vector) => {
      return vector.id == id;
    }).y = newValue;
  }
  function handleSliderClick(){
    setSliderStatus(!isSliderActive);
  }

  return (
    <React.Fragment>
    <Controls />
    <div className="vectorlab">
   
      <P5Wrapper
        sketch={Sketch}
        vectorsData={vectorsData}
        activeVectorId={activeVectorId}
      />
      <div style={{ marginRight: "10px" }}>
       
        <DisplayVectors
          vectorsData={vectorsData}
          activeVectorId={activeVectorId}
          handleActiveVector={handleActiveVector}
          hanldeXCompChange={hanldeXCompChange}
          handleYCompChange={handleYCompChange}
          addOperation={addOperation}
          className = {isSliderActive ? "displayvector-open" : "displayvector-close"}
        />
         <SvgSlider  className={`svg-slider ${isSliderActive ? "svg-slider-on" : "svg-slider-off" }`} onClick={handleSliderClick}/>
     
          
        <div className="vectorlab__input">
          <Fab
            onClick={addNewVector}
            variant="extended"
            color="secondary"
            onMouseEnter={() => {
              setIsMouseInAddIcon(true);
            }}
            onMouseLeave={() => setIsMouseInAddIcon(false)}
            style={{ padding: "10px" }}
          >
            <AddIcon className="vactorlab_input_icon" />
            {isMouseInAddIcon && (isDesktop()? "New Vector": "")}
          </Fab>  
        </div>
      </div>
    </div>
    </React.Fragment>
    
  );
}
