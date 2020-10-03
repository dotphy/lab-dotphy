import React, { useState } from "react";
import "./Controls.css";
import SvgPlay from "../../Assets/play.js";
import SvgPause from "../../Assets/pause.js";
import SvgGraph from "../../Assets/graph.js";
import SvgRepeat from "../../Assets/repeat.js";
import SvgConfigure from "../../Assets/configure.js";
import SvgFullScreen from "../../Assets/fullScreen.js";
import { PinDropSharp } from "@material-ui/icons";

//---------------Individual Control Components --------------

function Play({ status, onClick }) {
  return status == "play" ? (
    <SvgPlay onClick={onClick} className="icon" />
  ) : (
    <SvgPause onClick={onClick} className="icon" />
  );
}
function Repeat() {
  return <SvgRepeat className="icon" />;
}
function Configure({ status, onClick }) {
  return <SvgConfigure className={`icon ${status}`} onClick={onClick} />;
}
function Graph({ status, onClick }) {
  return <SvgGraph className={`icon ${status}`} onClick={onClick} />;
}
function FullScreen({ status, onClick }) {
  return <SvgFullScreen className={`icon ${status}`} onClick={onClick} />;
}

//-----------------------------------------------------------

function Controls(props) {
  const [playStatus, setPlayStatus] = useState("pause ");
  const [configureStatus, setConfigureStatus] = useState("on");
  const [graphStatus, setGraphStatus] = useState("off");
  const [fullScreenStatus, setFullScreenStatus] = useState(false);

  function handlePlayClick() {
    setPlayStatus(playStatus == "play" ? "pause" : "play");
  }
  function handleConfigureClick() {
    setConfigureStatus(configureStatus == "on" ? "off" : "on");
  }
  function handleGraphClick() {
    setGraphStatus(graphStatus == "on" ? "off" : "on");
  }
  function fullScreenClick() {
    setFullScreenStatus(fullScreenStatus ? false : true);
    if (fullScreenStatus) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  return (
    <div className="controls">
      <Play status={playStatus} onClick={handlePlayClick} />
      <Repeat />
      <Configure status={configureStatus} onClick={handleConfigureClick} />
      <Graph status={graphStatus} onClick={handleGraphClick} />
      <FullScreen
        status={fullScreenStatus}
        onClick={fullScreenClick}
        className={"icon"}
      />
    </div>
  );
}

export default Controls;
