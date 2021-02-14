import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import Slider from "@material-ui/core/Slider";
import Sketch from "./Sketch";
import "./SHM.css";

export default function SHM() {
  const [freqX, setFreqX] = useState(1000);
  const [freqY, setFreqY] = useState(1000);

  return (
    <div className="shm">
      <P5Wrapper
        sketch={Sketch}
        objectData={{
          freqX,
          freqY,
        }}
      />
      <Slider
        className="slider"
        value={freqX}
        onChange={(e, newValue) => {
          setFreqX(newValue);
        }}
        min={1}
        max={2000}
      />
      <Slider
        value={freqY}
        onChange={(e, newValue) => {
          setFreqY(newValue);
        }}
        min={1}
        max={2000}
      />

      <div>Add a new Particle</div>
    </div>
  );
}
