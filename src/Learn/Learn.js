import React, { useState, useEffect } from "react";
import LearnTab from "../Components/LearnTab/LearnTab";
import "./Learn.css";
import { storage } from "../services/firebase";
import Loader from "../Components/Loader/Loader";
import LearnInfo from "../Components/LearnInfo/LearnInfo";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VectorIcon from "../Assets/VectorIcon.svg";

export default function Learn() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let topicsCopy = [];
    storage
      .ref()
      .listAll()
      .then((ref) => {
        ref.prefixes.map((subRef) => {
          topicsCopy.push(subRef.location.path_);
        });
      })
      .then(() => {
        setTopics(topicsCopy);
        setIsLoading(false);
        topicsCopy.map((topic) => {
          storage
            .ref(topic)
            .getMetadata()
            .then(function (metadata) {
              console.log(metadata);
            });
        });
      });
  }, []);

  return (
    <div className="learn">
      <Link to="/" className="link">
        <ArrowBackIosIcon /> Back to Lab
      </Link>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <LearnInfo
              tutorialAvatar={VectorIcon}
              tutorialName={"Vectors"}
              tutorialDescription={
                "Vector will come across you on the every next page in your Physics Book. So, having a conceptual understanding of vectors will pay you off"
              }
            />
            {topics.map((topic) => {
              return <LearnTab title={topic}> </LearnTab>;
            })}
          </>
        )}
      </div>
      ;
    </div>
  );
}
