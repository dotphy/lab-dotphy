import React from "react";
import ReactDOM from "react-dom";
import "./Configuration.css";

export function Configuration(props) {
  return (
    <div className={`Configuration ${props.className}`}>
      <div className="top">
        <div className={"Configuration__Name"}> {props.name} </div>
        <div className={"Configuration__Edit"}> {"Edit"}</div>
      </div>
      <div className="bottom">
        <div className={"Configuration__Current"}> {props.current} </div>
      </div>
    </div>
  );
}
