import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Controls from "./Components/Controls/Controls";
import Experiment from "./Components/Experiment/Experiment";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFullScreenOn: false,
    };

    //Binding the methods to this"
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
  }
  componentDidUpdate() {
    if (this.state.isFullScreenOn) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  handleFullScreenClick() {
    this.setState((state) => {
      return { isFullScreenOn: state.isFullScreenOn ? false : true };
    });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
          <Controls />
          <Experiment />
        </div>
      </div>
    );
  }
}

export default App;
