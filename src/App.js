import React, {Suspense} from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

const Learn  = React.lazy(()=>import("./Learn/Learn"));
const VectorLab = React.lazy(()=>import("./Labs/VectorLab/VectorLab"));

function App(){
   
    return (
       <Router>
       <div className="app">
       <Header />
       <div className="main">
       <Suspense fallback = {<Loader/>}>
       <Route path = "/" component = {VectorLab}/> 
        <Route path = "learn" component = {Learn} /> 
       </Suspense>
       </div>
       </div>
       </Router>
    );
}

export default App;
