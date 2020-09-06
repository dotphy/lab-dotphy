import React from "react";
import "./Sidebar.css";
import { Configuration } from "../Configuration/Configuration";

export function Sidebar(props) {
  return <div className={`Sidebar ${props.className}`}> {props.elems}</div>;
}
