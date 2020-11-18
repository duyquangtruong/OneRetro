import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Login from "./components/login/login";
import Boards from "./components/boards/boards";
import Users from "./components/users/users";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import BoardDetail from "./components/boards/boardDetail";

function Index() {
  return (
    <Router>
      <div>
        <Route path="/login" exact component={Login} />
        <Route path="/boards/detail" exact component={BoardDetail} />
        <Route path="/boards" exact component={Boards} />
        <Route path="/users" exact component={Users} />
      </div>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
