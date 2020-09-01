import React, { useState } from "react";

import play from "../../Assets/play.svg";
import pause from "../../Assets/pause.svg";
import repeat from "../../Assets/repeat.svg";
import graph from "../../Assets/graph.svg";
import configure from "../../Assets/configure.svg";
import "./Controls.css";

function Play(props) {
  let src = props.status == "play" ? play : pause;
  return <img src={src} onClick={props.onClick} />;
}

function Repeat(props) {
  let animation = props.status;
  return <img src={repeat} onClick={props.onClick} className={animation} />;
}

function Graph(props) {
  let status = props.status;
  return <img src={graph} className={status} onClick={props.onClick} />;
}

function Configure(props) {
  let status = props.status;
  return <img src={configure} className={status} onClick={props.onClick} />;
}
export function Controls(props) {
  let [playStatus, setPlayStatus] = useState("play");
  let [repeatStatus, setRepeatStatus] = useState("reload1");
  let [graphStatus, setGraphStatus] = useState("off");
  let [configureStatus, setConfigureStatus] = useState("off");

  function handlePlayClick() {
    playStatus == "play" ? setPlayStatus("pause") : setPlayStatus("play");
  }
  function handleRepeatClick() {
    repeatStatus == "reload1"
      ? setRepeatStatus("reload2")
      : setRepeatStatus("reload1");
  }
  function handleGraphStatus() {
    graphStatus == "off" ? setGraphStatus("on") : setGraphStatus("off");
  }
  function handleConfigureStatus() {
    configureStatus == "off"
      ? setConfigureStatus("on")
      : setConfigureStatus("off");
  }

  return (
    <div className={`Controls ${props.className}`}>
      <Play status={playStatus} onClick={handlePlayClick} />
      <Repeat status={repeatStatus} onClick={handleRepeatClick} />
      <Graph status={graphStatus} onClick={handleGraphStatus} />
      <Configure status={configureStatus} onClick={handleConfigureStatus} />
    </div>
  );
}
