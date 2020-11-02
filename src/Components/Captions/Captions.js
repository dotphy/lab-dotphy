import React from "react";
import "./Captions.css";

export default function Captions(props) {
  return (
    <div className="captions">
      <p>{props.captionText} </p>
    </div>
  );
}
