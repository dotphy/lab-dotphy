import React, {Suspense} from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

const Learn  = React.lazy(()=>import("./Learn/Learn"));
const VectorLab = React.lazy(()=>import("./Labs/VectorLab/VectorLab"));

function App(){
   
    return (
      <Loader />
    );
}

export default App;
