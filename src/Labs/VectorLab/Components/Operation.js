import React, { useState } from "react";
import "./Operation.css";
 
import { MenuItem,Select,Button } from "@material-ui/core";
 


function OperationSet(props){
  const [selectedInp , setSelectedInp] = useState();

  function handleChange(e){
    setSelectedInp(e.target.value)
  }
  
  return <div className="operationset">
  
 <div className="operationset__inp">
  <div> {props.vectorData.name } </div>
  <div> {"   +   "}   </div>
  <Select
    labelId="vectorInp"
    className="vectorInp"
    value={selectedInp}
    onChange={handleChange}
    color = "secondary"
  >
    {props.vectorsData.map((vector)=>{ return <MenuItem value={vector} className="menuitem"> {vector.name }</MenuItem>})}
  </Select>
  </div>
 <Button  color="primary" variant="contained" onClick = {(e)=>{props.addOperation(e,props.vectorData.id, selectedInp.id,"add")}} >{props.label} </Button> </div>

}

export default function Operations(props) {
  let [isInputOn, setIsInputOn] = useState(false);
  let inputs = <div> </div>;

  if (isInputOn) {
    inputs = <div className="operations__input">  </div>;
  }
  function hanldeOperationClick() {
    setIsInputOn(!isInputOn);
  } 

  return (
    <div className = "operations">
      <div className="label"> 
        Operations
       </div>
      <div className="operations__sets">
         <OperationSet label = "Add"  vectorData = {props.vectorData} vectorsData = {props.vectorsData} addOperation = {props.addOperation} />
         <
       </div>
    </div> 
  );

}
