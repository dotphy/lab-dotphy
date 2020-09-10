import React from "react";
import "./MiniLabs.css";
import Avatar from "@material-ui/core/Avatar";

function Tab(props) {
  return (
    <div className={`tab ${props.active == true ? "tab-active" : ""}`}>
      <Avatar src={props.icon} className="avtr" />
      <h4> {props.text}</h4>
    </div>
  );
}

function MiniLab() {
  return (
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
  );
}

export default MiniLab;
