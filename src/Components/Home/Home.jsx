import React, { useState } from "react";
import classNames from "classnames";
import "./Home.scss";
import { Link } from "react-router-dom";

function LabContiner(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classNames({
        labcontainer: true,
        labcontainer__hovered: isHovered,
        labcontainer__unhovered: !isHovered,
      })}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="labcontainer__name"> {props.name} </div>
      <div className="labcontainer__desc"> {props.description}</div>
      <div className="labcontainer__overview"> {"   "}</div>
      <Link to={props.route} className="labcontainer__button">
        Go to {props.name}{" "}
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      <div className="home__onboard">
        <div className="home__onboard__text">
          <div className="home__onboard__top-text"> A virtual </div>
          <h1> Physics Lab </h1>
          <div className="home__onboard__bottom-text">
            for high schoolers to study physics.
          </div>
        </div>
        <iframe
          src="https://my.spline.design/untitled-0c08480cbc0953bab091caaf21183300/"
          frameborder="0"
          width="100%"
          height="100%"
          className="home__onboard__vis"
        ></iframe>
      </div>
      <div className="home__labs">
        <LabContiner
          name="Vector Lab"
          description="A lots of vectors, add them, tweak them, do whatever you want !"
          route="vectorlab"
        />
        <LabContiner
          name="Kinematics Lab"
          description="Add a body, add forces to it, see what happens and do whatever you want to do with it "
          route="Kinematics"
        />
        <LabContiner
          name="Mathematics Lab"
          description="WIP "
          route="Kinematics"
        />
      </div>
    </div>
  );
}
