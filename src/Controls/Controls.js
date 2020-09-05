import React from "react";
import "./controls.css";
import Pause from "@material-ui/icons/PauseOutlined";
import PlayArrow from "@material-ui/icons/PlayArrowOutlined";
import Repeat from "@material-ui/icons/ReplayOutlined";

function Controls() {
  return (
    <div className={"controls"}>
      <PlayArrow className="icons" />
      <Repeat className="icons" />
    </div>
  );
}

export default Controls;
