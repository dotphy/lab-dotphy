import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MiniLabs from "./Components/MiniLabs/MiniLabs";
import Controls from "./Components/Controls/Controls";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Controls />
        <div className="experiment"> </div>
        <MiniLabs />
      </div>
    </div>
  );
}

export default App;
