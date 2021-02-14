import React, { useState, useEffect } from "react";
import "./Header.css";
import dotphy from "../../Assets/dotphy.png";
import Drawer from "@material-ui/core/Drawer";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import Home from "@material-ui/icons/Home";
import Book from "@material-ui/icons/Book";
import Forum from "@material-ui/icons/Forum";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

function SideBarTab() {
  return <div className="sidebar-tab"></div>;
}

function SideBar({ availableLabs }) {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div>
      <MenuIcon
        style={{ color: "white" }}
        onClick={() => {
          setDrawerState(!drawerState);
        }}
      />
      <Drawer
        open={drawerState}
        onClose={() => {
          setDrawerState(false);
        }}
        className="sidebar"
      >
        {["one"]}
      </Drawer>
    </div>
  );
}

function Header(props, availableLabs) {
  const [active, setActive] = useState(1);

  return (
    <div className="header">
      <div className="header__left">
        <SideBar availableLabs={availableLabs} />
        <img src={dotphy} className="header__icon" alt="dotphy logo" />
      </div>
      <div className="header__middle">
        <Link to="/">
          <div
            className={`header__option ${
              active == 1 ? "header__option-active" : ""
            }`}
            onClick={() => {
              setActive(1);
            }}
          >
            <Home />
          </div>
        </Link>
        <Link to="/learn">
          <div
            className={`header__option ${
              active == 2 ? "header__option-active" : ""
            }`}
            onClick={() => {
              setActive(2);
            }}
          >
            <Book />
          </div>
        </Link>
        <Link to="QnA">
          <div
            className={`header__option ${
              active == 3 ? "header__option-active" : ""
            }`}
            onClick={() => {
              setActive(3);
            }}
          >
            <Forum />
          </div>
        </Link>
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
