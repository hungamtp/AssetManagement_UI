import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import ManageAsset from "./components/Manage Asset/ManageAsset";
import LoginFirst from "./components/LoginFirst/LoginFirst";
import Logout from "./components/Logout";


 

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import CreateNewUser from "./components/Create New User";
import ChangePassword_Page from "./pages/Change password";
import EditAsset_Page from "./pages/Edit asset";

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
              <EditAsset_Page />
            </Route>
            <Route exact path="/changepassword">
              <ChangePassword_Page/>
            </Route>

            <Route exact path="/createnewuser">
              <CreateNewUser />
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
