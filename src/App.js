import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Controls } from "./Components/Controls/Controls";
import { Experiment } from "./Components/Experiment/Experiment";

export default function App() {
  return (
    <div className="App">
      <Experiment />
      <Controls className="App__Controls" />
    </div>
  );
}
