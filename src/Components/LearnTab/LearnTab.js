import React, { useState } from "react";
import "./LearnTab.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { storage } from "../../services/firebase";
import { Redirect } from "react-router-dom";

function SubTopicTab(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      onClick={() => {
        setIsLoaded(true);
      }}
    >
      {isLoaded ? (
        <Redirect
          to={{
            pathname: "/play",
            state: {
              tutorialRef: props.subTopicRef,
              audioRef: props.subAudioRef,
            },
          }}
        />
      ) : (
        <p className="subtopictab">
          {props.subTopicRef.split("/")[2].split(".")[0].split("-").join(" ")}
        </p>
      )}
    </div>
  );
}
export default class LearnTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subTopics: [],
      elems: [],
    };
  }

  componentDidMount() {
    let subTopicsCopy = [];

    storage
      .ref(this.props.title + "/Tutorials/")
      .listAll()
      .then((ref) => {
        ref.items.map((item) => {
          subTopicsCopy.push(item.location.path_);
        });
        this.setState({
          subTopics: subTopicsCopy,
        });
        this.setState({
          elems: this.state.subTopics.map((subTopic) => {
            return (
              <SubTopicTab
                subTopicRef={subTopic}
                subAudioRef={subTopic.replace("Tutorials", "Audio")}
              />
            );
          }),
        });
      });
  }

  render() {
    return (
      <div className="root">
        <Accordion className="learntab">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="learntab__title">
              {" "}
              {this.props.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="summary">
            {this.state.elems}
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
