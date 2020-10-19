import React from "react";
import {LinearProgress} from "@material-ui/core";
import {dotphy} from  "../Assets/dotphy.png"
 

const styles = {
    loader:{
    display:"grid",
    alignItems:"center",
    placeItems:"center",
    height:"100vh",
    }

}

export default function Loader(){
    return <div className = {styles.loader}> 
    <img src={dotphy} alt = "Unable to load image"/>
    </div>
}