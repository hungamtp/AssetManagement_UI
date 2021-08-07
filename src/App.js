import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./components/Users";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <ProtectedRoute exact path="/manage/category" component={Home} /> */}
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/test">
              <Index/>
            </Route>
            <Route path="/**" render={() => <h2>Not found</h2>}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
