import React, { useState } from "react";
import "./Controls.css";
import {SvgConfigure, SvgFullScreen, SvgGraph , SvgPause,SvgPlay ,SvgRepeat, Svg3D} from "../../Assets/icons"
 

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

//-----------------------------------------------------------

function Controls(props) {
  const [playStatus, setPlayStatus] = useState("pause ");
  const [configureStatus, setConfigureStatus] = useState("on");
  const [graphStatus, setGraphStatus] = useState("off");

  function handlePlayClick() {
    setPlayStatus(playStatus == "play" ? "pause" : "play");
  }
  function handleConfigureClick() {
    setConfigureStatus(configureStatus == "on" ? "off" : "on");
  }
  function handleGraphClick() {
    setGraphStatus(graphStatus == "on" ? "off" : "on");
  }
  function IsReload(){
  document.querySelector(".reload").addEventListener('click', () => {
    window.location.reload(true);
  })}
  return (
    <div className="controls">
      <Play status={playStatus} onClick={handlePlayClick} />
      <Repeat className={"reload", <IsReload/>} />
      <Configure status={configureStatus} onClick={handleConfigureClick} />
      <Graph status={graphStatus} onClick={handleGraphClick} />
      <SvgFullScreen onClick={props.handleFullScreenClick} className={"icon"} />
      <Svg3D className={"icon"}/>
    </div>
  );
}


export default Controls;
