import React, { useState } from "react";
import "./Operation.css";

import { TextField, MenuItem, Fab, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

export default function Operations(props) {
  let [isInputOn, setIsInputOn] = useState(false);
  let inputs = <div> </div>;

  if (isInputOn) {
    inputs = <div className="operations__input"> Hii </div>;
  }
  function hanldeOperationClick() {
    setIsInputOn(!isInputOn);
  }
  return (
    <div className="operations">
      <div className="operations__set">
        <div> Operations</div>
        <div>
          <IconButton color="secondary" onClick={hanldeOperationClick}>
            <AddIcon className="operations__set__add" />
          </IconButton>
          <IconButton color="secondary" onClick={hanldeOperationClick}>
            <AddIcon className="operations__set__cross__icon operation__set__cross" />
          </IconButton>
        </div>

        <IconButton
          className="operations__set__dot"
          color="secondary"
          onClick={hanldeOperationClick}
        >
          .
        </IconButton>
      </div>
      {inputs}
    </div>
  );
}
