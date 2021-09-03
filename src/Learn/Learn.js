import React, { useState, useEffect } from "react";
import LearnTab from "../Components/LearnTab/LearnTab";
import { Helmet } from "react-helmet";
import "./Learn.scss";
import { storage } from "../services/firebase";
import LearnInfo from "../Components/LearnInfo/LearnInfo";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import VectorIcon from "../Assets/VectorIcon.svg";

async function getTopics() {
  let topics = [];
  let ref = await storage.ref().listAll();

  await ref.prefixes.map((subRef) => {
    topics.push(subRef.location.path_);
  });

  return topics;
}

export default function Learn() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  return (
    <div className="learn">
      <Helmet>
        <title> Learn - Dotphy</title>{" "}
      </Helmet>
      <Link to="/" className="link">
        <ArrowBackIosIcon /> Back to Lab
      </Link>
      <div className="learn__main">
        <h1>  🚧 🚧 WIP 🚧 🚧</h1>
      </div>
    </div>
  );
}
