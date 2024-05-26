import React, { useEffect, useState } from "react";
import "./App.css";
// import { makeStyles } from "@material-ui/core/styles";
import { loadCSS } from "fg-loadcss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
// import Images from './components/Images';
import Intro from "./components/Intro";
import Pics from "./components/Pics";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: "0px 60px 60px 40px",
//     // margin: "20px"
//   },
// }));

const App = () => {
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
  const [authenticated, setAuthenticated] = useState(false);
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route
              path="/pics"
              element={
                <ProtectedRoute authenticated={authenticated}>
                  <Pics />
                </ProtectedRoute>
              }
          />
            {/*<Route path="/pics" element={ <Pics />} />*/}
            <Route path="/*" element={ <Intro />} />
        </Routes>
      </Router>
  );
  // return (
  //   <div className="App">
  //     <Intro />
  //   </div>
  // );
}

export default App;
