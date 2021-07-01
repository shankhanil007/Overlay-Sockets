import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Zoom from "./components/Zoom";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact component={Zoom} />
      </Router>
    </>
  );
};

export default App;
