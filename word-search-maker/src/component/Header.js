import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="title">
        <div className="title-1">The</div>
        <div className="subTitle">
          <div className="subTitle-2">Word</div>
          <div className="subTitle-3">Search</div>
        </div>
      </div>
      {/* <button className="menu-btn">Menu</button> */}
      <div className="menu-bar">
        <div className="changeTheme">Switch Theme</div>
        <div className="icon">
          <div className="icon-1">Word Search Maker</div>
          <div className="icon-2">More Puzzles</div>
          <div className="icon-3">Search</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
