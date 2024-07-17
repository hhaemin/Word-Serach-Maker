import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <section>
      <div className="backColor">
        <div className="img">
          <img
            src={"https://thewordsearch.com/v4/img/word-search-puzzle.png"}
            alt="Puzzle Sample"
          />
        </div>
        <p>Thousands ready to play online</p>
      </div>
      <div className="description">
        <div>Word Search</div>
      </div>
    </section>
  );
};

export default Description;
