import React from "react";
import "./App.css";
import vector from "./Assets/vector.svg";
import Header from "./Components/Header/Header";
import Tab from "./Components/Tab/Tab";
import ArrowForward from "@material-ui/icons/ArrowForward";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="experiment"> </div>
        <div className="mini-labs">
          <Tab
            icon={"https://image.flaticon.com/icons/svg/892/892076.svg"}
            text="Vectors"
            active={true}
          />
          <Tab
            text="Kinematics"
            icon={
              "https://www.flaticon.com/premium-icon/icons/svg/2923/2923639.svg"
            }
          />
          <Tab
            text="Dynamics"
            icon={"https://image.flaticon.com/icons/svg/3247/3247974.svg"}
          />
          <Tab
            text="Magnetism"
            icon={"https://image.flaticon.com/icons/svg/994/994199.svg"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
