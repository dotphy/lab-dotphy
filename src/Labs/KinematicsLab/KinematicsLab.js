import React, { useState } from "react";
import Sketch from "./Sketch";
import P5Wrapper from "react-p5-wrapper";
import "./KinematicsLab.css";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function SideBar({ addNewObject }) {
  return (
    <div className="sidebar">
      <h1> Add a new Object </h1>
      <div className="sidebar__input">
        <Fab
          onClick={() => {
            addNewObject(
              Math.random() * 100,
              Math.random() * 50,
              Math.random(),
              Math.random()
            );
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

export default function KinematicsLab() {
  const [objectsData, setObjectsData] = useState([
    { x: 10, y: 20, vecx: Math.random(), vecy: Math.random() },
  ]);

  function addNewObject(x, y, vecx, vecy) {
    let copyObjectsData = objectsData.slice();
    copyObjectsData.push({ x: x, y: y, vecx, vecy });
    setObjectsData(copyObjectsData);
  }

  return (
    <div className="kinematicslab">
      <P5Wrapper sketch={Sketch} objectsData={objectsData} />
      <SideBar addNewObject={addNewObject} />
    </div>
  );
}
