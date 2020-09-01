import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { Controls } from "./Components/Controls/Controls";
import { Experiment } from "./Components/Experiment/Experiment";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Configuration } from "./Components/Configuration/Configuration";

export default function App() {
  return (
    <div className="App">
      <Experiment className={"App__Experiment"} />
      <Sidebar
        className={"App__Sidebar"}
        elems={[
          <Configuration name="Velocity" current={25} />,
          <Configuration name="Accleration" current={25} />,
        ]}
      />
      <Controls className={"App__Controls"} />
    </div>
  );
}
