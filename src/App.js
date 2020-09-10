import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MiniLabs from "./Components/MiniLabs/MiniLabs";
import Controls from "./Components/Controls/Controls";
import Experiment from "./Components/Experiment/Experiment";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Controls />
        <Experiment />
      </div>
    </div>
  );
}

export default App;
