import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Zoom from "./components/Zoom";
import Join from "./components/Join/Join";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Zoom} />
    </Router>
  );
};

export default App;
