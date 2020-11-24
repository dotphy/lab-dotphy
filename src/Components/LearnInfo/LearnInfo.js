import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./LearnInfo.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
export default function LearnInfo(props) {
  return (
    <div className="learninfo">
      <Avatar src={props.tutorialAvatar} className="learninfo__icon"></Avatar>
      <div className="learninfo__text">
        <h1> {props.tutorialName} </h1>
        <div className="text">{props.tutorialDescription}</div>
      </div>
    </div>
  );
}
