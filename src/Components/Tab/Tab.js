import React from "react";
import "./Tab.css";
import Avatar from "@material-ui/core/Avatar";

function Tab(props) {
  return (
    <div className={`tab ${props.active == true ? "tab-active" : ""}`}>
      <Avatar src={props.icon} className="avtr" />
      <h4> {props.text}</h4>
    </div>
  );
}

export default Tab;
