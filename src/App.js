import React, { Suspense } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";

import { BrowserRouter as Router, Route } from "react-router-dom";

const VectorLab = React.lazy(() => import("./Labs/VectorLab/VectorLab"));
const KinematicsLab = React.lazy(() =>
  import("./Labs/KinematicsLab/KinematicsLab")
);
const QnA = React.lazy(() => import("./QnA/QnA"));
const Learn = React.lazy(() => import("./Learn/Learn"));
const Player = React.lazy(() => import("./Labs/VectorLab/Player"));
const SHM = React.lazy(() => import("./Labs/SHM/SHM"));


const availableLabs = [{
  label:"VectorLab",
  route:"/"
}]

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={VectorLab} />
            <Route exact path="/kinematics" component={KinematicsLab} />
            <Route exact path="/shm" component={SHM} />
            <Route path="/learn" component={Learn} />
            <Route path="/play" component={Player} />
            <Route path="/QnA" component={QnA} />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
