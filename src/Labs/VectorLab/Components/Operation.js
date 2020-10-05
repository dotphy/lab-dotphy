import React from "react";
import "./Operation.css";

import { Fab, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function Operations(props) {
  return (
    <div className="operations">
      <Fab className="operations__add">
        <AddIcon />
      </Fab>
      <Fab className="operations__cross">
        <AddIcon className="operations__cross__icon" />
      </Fab>
      <Fab className="operations__dot">
        <IconButton> . </IconButton>
      </Fab>
    </div>
  );
}
