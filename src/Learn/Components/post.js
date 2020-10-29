import React from "react";
import dotphy from "../../Assets/dotphy.png";
import { Avatar } from "@material-ui/core";

import "./post.css";
export default function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={props.url} />
        <p> {props.userName} </p>
      </div>
      <div className="post__content">
        <p> {props.content}</p>
      </div>
      <div clasName="post__bottom"> </div>
    </div>
  );
}
