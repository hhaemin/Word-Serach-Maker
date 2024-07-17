import "./App.css";
import React from "react";
import Header from "./component/Header";
import Description from "./component/Description";

function App() {
  const appStyle = {
    paddingLeft: "35px",
    paddingRight: "35px",
  };
  return (
    <div className="wrapper" style={appStyle}>
      <Header />
      <Description />
    </div>
  );
}

export default App;
