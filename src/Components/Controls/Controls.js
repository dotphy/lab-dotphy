import React, { useState } from "react";
import ReactDOM from "react-dom";
import play from "../../Assets/play.svg";
import pause from "../../Assets/pause.svg";
import repeat from "../../Assets/repeat.svg";
import graph from "../../Assets/graph.svg";
import configure from "../../Assets/configure.svg";
import "./controls.css";

function Play({ status }) {
  let src = status == "play" ? play : pause;
  return <img src={src} />;
}

function Repeat() {
  return <img src={repeat} />;
}

export function Controls(props) {
  let [playStatus, setPlayStatus] = useState("play");

  function handleClick() {
    console.log("Click Handled");
    setPlayStatus("pause");
  }

  return (
    <div className={`controls ${props.className}`}>
      <Play status={playStatus} onClick={handleClick} />
      <Repeat />
      <img src={graph} />
      <img src={configure} />
    </div>
  );
}
