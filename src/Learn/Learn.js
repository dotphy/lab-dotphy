import React from "react";
import LearnTab from "../Components/LearnTab/LearnTab";
import "./Learn.css";
import { storage } from "../services/firebase";
import Loader from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
export default class Learn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      elem: <Loader />,
    };
  }

  componentDidMount() {
    let topicsCopy = [];
    storage
      .ref()
      .listAll()
      .then((ref) => {
        ref.prefixes.map((prefix) => {
          topicsCopy.push(prefix.location.path_);
        });
        this.setState({
          topics: topicsCopy,
        });
        this.setState({
          elem: this.state.topics.map((topic) => {
            return <LearnTab title={topic}> </LearnTab>;
          }),
        });
      });
  }

  render() {
    return (
      <div className="learn">
        <Link to="/" className="link">
          <ArrowBackIosIcon /> Back to Lab
        </Link>
        <div>{this.state.elem}</div>;
      </div>
    );
  }
}
