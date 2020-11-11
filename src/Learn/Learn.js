import React, { useState, useEffect } from "react";
import LearnTab from "../Components/LearnTab/LearnTab";
import "./Learn.css";
import { storage } from "../services/firebase";
import Loader from "../Components/Loader/Loader";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

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
          topics.map((topic) => {
            return <LearnTab title={topic}> </LearnTab>;
          })
        )}
      </div>
      ;
    </div>
  );
}
