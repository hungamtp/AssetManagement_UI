import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import ManageAsset from "./components/Manage Asset/ManageAsset";
import Edit from "./components/Manage Asset_Edit/Edit";
import ChangePassword from "./components/Change Password/ChangePassword";
import LoginFirst from "./components/LoginFirst/LoginFirst";
import Logout from "./components/Logout";


 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import CreateNewUser from "./components/Create New User";

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
              <CreateNewUser />
            </Route>
            <Route exact path="/changepassword">
              <ChangePassword />
            </Route>
            <Route exact path="/login_first">
              <LoginFirst />
            </Route>
            <Route exact path="/logout">
              <Logout />
            </Route> 
            
            <Route path="/**" render={() => <h2>Not found</h2>}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
