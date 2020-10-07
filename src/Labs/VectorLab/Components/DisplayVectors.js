import React from "react";
import "./DisplayVectors.css";
import Operation from "./Operation";
import { Slider } from "@material-ui/core";
import { EditIcon } from "@material-ui/icons/Edit";

let displaySize = {
  width:
    window.innerWidth > 700 ? window.innerWidth / 2 : window.innerWidth - 20,
  height: window.innerHeight / 2,
};

export default function DisplayVectors({
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

function DisplayVectorsTab({
  vectorsData,
  activeVectorId,
  handleActiveVector,
  hanldeXCompChange,
  handleYCompChange,
}) {
  //Conditionally Rendered Compoenents ...

  let xComp = <p className="numbers">{String(vectorsData.x) + " units"}</p>;
  let yComp = <p className="numbers">{String(vectorsData.y) + " units"}</p>;
  let operations = <div> </div>;
  if (vectorsData.id == activeVectorId) {
    xComp = (
      <Slider
        defaultValue={vectorsData.x}
        onChange={(e, newValue) => {
          hanldeXCompChange(e, newValue, vectorsData.id);
        }}
        min={0}
        max={displaySize.width - 100}
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
        max={displaySize.height - 100}
        valueLabelDisplay="auto"
      />
    );
    operations = (
      <div className="displayvectorstab__data__operations">
        <Operation />
      </div>
    );
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
          <p> Horizontal Component</p>
          {xComp}
        </div>
        <div className="displayvectorstab__data__ycomp">
          <p> Vertical Component </p>
          {yComp}
        </div>

        <div>{operations}</div>
      </div>
      <div></div>
    </div>
  );
}
