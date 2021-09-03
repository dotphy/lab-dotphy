import React, { useState } from "react";
import Sketch from "./Sketch";
import P5Wrapper from "react-p5-wrapper";
import "./KinematicsLab.css";
import { Fab, TextField } from "@material-ui/core";
import {Helmet} from "react-helmet";
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
    { x: 10, y: 20, vecx: 5, vecy: 5},
  ]);

  function addNewObject(x, y, vecx, vecy) {
    let copyObjectsData = objectsData.slice();
    copyObjectsData.push({ x: x, y: y, vecx, vecy });
    setObjectsData(copyObjectsData);
  }

  return (
    <div className="kinematicslab">
      <Helmet> <title> KinematicsLab - WIP </title> </Helmet>
      <P5Wrapper sketch={Sketch} objectsData={objectsData} />
      <SideBar addNewObject={addNewObject} />
    </div>
  );
}
