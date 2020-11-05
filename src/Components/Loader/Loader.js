import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import loader from "../../Assets/loader.png";
import "./Loader.css";

export default function Loader() {
  const [loaderValue, setLoaderValue] = useState(100);

  setInterval(() => {
    setLoaderValue(loaderValue / 4);
  }, 100);
  return (
    <div className="loader">
      <img src={loader} />
      <LinearProgress
        variant="determinate"
        value={100 - loaderValue}
        className="loader__progress"
      />
    </div>
  );
}
