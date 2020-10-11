import React, { useState } from "react";
import "./Operation.css";
 
import { TextField, MenuItem, Fab, IconButton,Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";


function OperationSet(props){
  const [val , setVal] = useState(0)
  return <div className="operationset">
  <div className="operationset__input"> </div>
  <div className="operationset__label">
  <div> {props.vectorData.name} </div>
   
   <Button  color="primary"  variant="contained" startIcon={<AddIcon/>} >{props.label} </Button> </div>
</div>
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
         <OperationSet label = "Add" icon = "addIcon" vectorData = {props.vectorData}/>
         
      </div>
    </div> 
  );

}
