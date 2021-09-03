import React, { Suspense } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";
import Home from "./Components/Home/Home";
import {Helmet } from "react-helmet";

import { BrowserRouter as Router, Route } from "react-router-dom";

const VectorLab = React.lazy(() => import("./Labs/VectorLab/VectorLab"));
const KinematicsLab = React.lazy(() =>
  import("./Labs/KinematicsLab/KinematicsLab")
);
const QnA = React.lazy(() => import("./QnA/QnA"));
const Learn = React.lazy(() => import("./Learn/Learn"));


const availableLabs = [{
  label:"VectorLab",
  route:"/"
}]

function App() {
  return (
    <Router>
      <div className="app">
        <Helmet> <title> Dotphy - Your Virtual Physics lab</title> </Helmet>
        <Header />
        <div className="main">
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={Home} />
            <Route exact path="/vectorlab" component={VectorLab} />
            <Route exact path="/kinematics" component={KinematicsLab} />
            <Route path="/learn" component={Learn} />
            <Route path="/QnA" component={QnA} />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
