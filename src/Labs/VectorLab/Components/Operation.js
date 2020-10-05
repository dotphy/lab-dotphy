import React from "react";
import "./Operation.css";

import { Fab, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function Operations(props) {
  return (
    <div className="operations">
      <IconButton color="secondary">
        <AddIcon className="operations__add" />
      </IconButton>
      <IconButton color="secondary">
        <AddIcon className="operations__cross__icon operation__cross" />
      </IconButton>

      <IconButton className="operations__dot" color="secondary">
        .
      </IconButton>
    </div>
  );
}
