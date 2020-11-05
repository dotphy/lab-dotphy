import React, { useState } from "react";
import "./Operation.css";

import {
  MenuItem,
  Select,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function OperationAdd(props) {
  const [selectedInp, setSelectedInp] = useState("");

  function handleChange(e) {
    setSelectedInp(e.target.value);
  }

  return (
    <div className="operationset">
      <div className="operationset__inp">
        <div> {props.vectorData.name} </div>
        <div> {"   +   "} </div>
        <Select
          labelId="vectorInp"
          className="vectorInp"
          value={selectedInp}
          onChange={handleChange}
          color="secondary"
        >
          {props.vectorsData.map((vector) => {
            return (
              <MenuItem value={vector} className="menuitem" key={vector.id}>
                {vector.name}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <Button
        color="primary"
        variant="contained"
        onClick={(e) => {
          props.addOperation(
            e,
            props.vectorData.id,
            selectedInp.id,
            "add",
            null
          );
        }}
      >
        Add
      </Button>{" "}
    </div>
  );
}

function OperationScale(props) {
  const [selectedInp, setSelectedInp] = useState(1);

  function handleChange(e) {
    setSelectedInp(e.target.value);
  }

  return (
    <div className="operationset">
      <div className="operationset__inp">
        <div> {props.vectorData.name} </div>
        <div> {"   x  "} </div>
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          style={{
            width: "70px",
          }}
          color="primary"
          variant="filled"
          value={selectedInp}
          onChange={handleChange}
        />
      </div>
      <Button
        color="primary"
        variant="contained"
        onClick={(e) => {
          props.addOperation(
            e,
            props.vectorData.id,
            null,
            "scale",
            selectedInp
          );
        }}
      >
        {" "}
        Scale
      </Button>{" "}
    </div>
  );
}

export default function Operations(props) {
  let [isInputOn, setIsInputOn] = useState(false);
  let inputs = <div> </div>;

  if (isInputOn) {
    inputs = <div className="operations__input"> </div>;
  }
  function hanldeOperationClick() {
    setIsInputOn(!isInputOn);
  }

  return (
    <Accordion className="operations">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="label">Operations</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="operations__sets">
          <OperationAdd
            vectorData={props.vectorData}
            vectorsData={props.vectorsData}
            addOperation={props.addOperation}
          />
          <OperationScale
            vectorData={props.vectorData}
            addOperation={props.addOperation}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
