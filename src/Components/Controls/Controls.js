import React, { useState } from "react";
import "./Controls.css";
import {
  SvgConfigure,
  SvgFullScreen,
  SvgGraph,
  SvgRepeat,
  Svg3D,
} from "../../Assets/icons";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

//---------------Individual Control Components --------------

function Play({ isPaused, toggleIsPaused }) {
  return isPaused ? (
    <PlayArrowIcon onClick={toggleIsPaused} className="icon icon-materialui" />
  ) : (
    <PauseIcon onClick={toggleIsPaused} className="icon icon-materialui" />
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

function Controls({ isPaused, toggleIsPaused, reloadExperiment }) {
  const [configureStatus, setConfigureStatus] = useState("on");
  const [graphStatus, setGraphStatus] = useState("off");
  const [isFullScreenOn, setFullScreenStatus] = useState(false);

  function handleConfigureClick() {
    setConfigureStatus(configureStatus === "on" ? "off" : "on");
  }
  function handleGraphClick() {
    setGraphStatus(graphStatus === "on" ? "off" : "on");
  }
  function IsReload() {
    document.querySelector(".reload").addEventListener("click", () => {
      window.location.reload(true);
    });
  }
  function handleFullScreenClick() {
    setFullScreenStatus(!isFullScreenOn);
  }
  return (
    <div className="controls">
      <Play isPaused={isPaused} toggleIsPaused={toggleIsPaused} />
      <Repeat
        className={("reload", (<IsReload />))}
        onClick={reloadExperiment}
      />
      <Configure status={configureStatus} onClick={handleConfigureClick} />
      <Graph status={graphStatus} onClick={handleGraphClick} />
      <SvgFullScreen onClick={handleFullScreenClick} className={"icon"} />
      <Svg3D className={"icon"} />
    </div>
  );
}

export default Controls;
