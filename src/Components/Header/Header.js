import React from "react";
import "./Header.css";
import dotphy from "../../Assets/dotphy.png";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Home from "@material-ui/icons/Home";
import Book from "@material-ui/icons/Book";
import Forum from "@material-ui/icons/Forum";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

function Header(props) {
  console.log(window.location.pathname);
  return (
    <div className="header">
      <div className="header__left">
        <img src={dotphy} className="header__icon" alt="dotphy logo" />
      </div>
      <div className="header__middle">
        <Link to="/">
          <div className="header__option header__option-active">
            <Home />
          </div>
        </Link>
        <Link to="/learn">
          <div className="header__option">
            <Book />
          </div>
        </Link>
        <div className="header__option">
          <Forum />
        </div>
      </div>
      <div className="header__right">
        <div className="header__input">
          <SearchOutlined />
          <input type="text" placeholder="Find A Experiment" />
        </div>
      </div>
    </div>
  );
}

export default Header;
