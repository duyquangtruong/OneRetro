import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Login from "./components/login/login";
import Boards from "./components/boards/boards";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

function Index() {
  return (
    <Router>
      <div>
        <Route path="/login" exact component={Login} />
        <Route path="/boards" exact component={Boards} />
      </div>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
