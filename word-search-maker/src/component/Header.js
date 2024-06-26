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
      <button className="menu-btn">Menu</button>
    </header>
  );
};

export default Header;
