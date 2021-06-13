import React, { useEffect } from "react";
import "./App.css";
// import { makeStyles } from "@material-ui/core/styles";
import Intro from "./components/Intro";
import { loadCSS } from "fg-loadcss";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "0px 60px 60px 40px",
//     // margin: "20px"
//   },
// }));

function App() {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );
    console.clear();
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <div className="App">
      <Intro />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
