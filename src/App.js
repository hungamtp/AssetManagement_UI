import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import ManageAsset from "./components/Manage Asset/ManageAsset";
import Edit from "./components/Manage Asset_Edit/Edit";
import ChangePassword from "./components/Change Password/ChangePassword";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateNewUser_Page from "./pages/Create new user";
import CreateAsset from "./pages/CreateAsset";
import * as URL from "./constants/URL";

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
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/manageasset">
              <ManageAsset />
            </Route>
            <Route exact path="/editasset">
              <Edit />
            </Route>
            <Route exact path="/changepassword">
              <ChangePassword />
            </Route>

            <Route exact path="/createnewuser">
              <CreateNewUser_Page />
            </Route>

            <Route exact path={URL.CREATE_ASSET}>
              <CreateAsset />
            </Route>

            <Route path="/**" render={() => <h2>Not found</h2>}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
