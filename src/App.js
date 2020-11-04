import React, { Suspense } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Loader from "./Components/Loader/Loader";

import { BrowserRouter as Router, Route } from "react-router-dom";

const Learn = React.lazy(() => import("./Learn/Learn"));
const VectorLab = React.lazy(() => import("./Labs/VectorLab/VectorLab"));
const Player = React.lazy(() => import("./Labs/VectorLab/Player"));

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main">
          <Suspense fallback={<Loader />}>
            <Route exact path="/" component={VectorLab} />
            <Route path="/learn" component={Learn} />
            <Route path="/play" component={Player} />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
