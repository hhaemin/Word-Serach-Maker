import "./App.css";
import Header from "./component/Header";

function App() {
  const appStyle = {
    paddingLeft: "35px",
    paddingRight: "35px",
  };
  return (
    <div className="wrapper" style={appStyle}>
      <Header />
    </div>
  );
}

export default App;
