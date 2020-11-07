import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import loader from "../../Assets/loader.png";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <img src={loader} />
      <LinearProgress className="loader__progress" color="primary" />
    </div>
  );
}
