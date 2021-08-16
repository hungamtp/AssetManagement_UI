import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import StaffHome from "./components/StaffHome";
import FirstLogin from "./components/FirstLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import ManageAsset from "./components/Manage Asset/ManageAsset";
import CreateNewUser_Page from "./pages/Create new user";
import CreateAsset from "./pages/CreateAsset";
import * as URL from "./constants/URL";
import * as role from "./constants/Business";
import EditUser_Page from "./pages/Edit user";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteForFirstLogin from "./components/ProtectedRouteForFirstLogin";
import EditAsset_Page from "./pages/Edit asset";
import ManageUser_Page from "./pages/ManageUser";
import Create_Assignment_Page from "./pages/Create assignment";
import DeleteAsset from "./components/Delete Asset";
import ManageAssignment_Page from "./pages/ManageAssignment"

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* CHANGEPASS */}
            <ProtectedRouteForFirstLogin exact path={URL.FIRST_LOGIN} role={role.ROLE_ADMIN + role.ROLE_STAFF} component={FirstLogin} />
            {/* HOME */}
            <ProtectedRoute exact path={URL.HOME_ADMIN} role={role.ROLE_ADMIN} component={Home} />
            <ProtectedRoute exact path={URL.HOME_USER} role={role.ROLE_STAFF} component={StaffHome} />
            {/* USER */}
            <ProtectedRoute exact path={URL.MANAGE_USER} role={role.ROLE_ADMIN} component={ManageUser_Page} />
            <ProtectedRoute exact path={URL.CREATE_USER} role={role.ROLE_ADMIN} component={CreateNewUser_Page} />
            <ProtectedRoute exact path={URL.EDIT_USER} role={role.ROLE_ADMIN} component={EditUser_Page} />
            {/* ASSET */}
            <ProtectedRoute exact path={URL.MANAGE_ASSET} role={role.ROLE_ADMIN} component={ManageAsset} />
            <ProtectedRoute exact path={URL.CREATE_ASSET} role={role.ROLE_ADMIN} component={CreateAsset} />
            <ProtectedRoute exact path={URL.EDIT_ASSET} role={role.ROLE_ADMIN} component={EditAsset_Page} />
            {/* ASSIGNMENT */}
            <ProtectedRoute exact path={URL.MANAGE_ASSIGNMENT} role={role.ROLE_ADMIN} component={ManageAssignment_Page} />
            <ProtectedRoute exact path={URL.CREATE_ASSIGNMENT} role={role.ROLE_ADMIN} component={Create_Assignment_Page} />
            <Route exact path="/**">
              <Login />
            </Route>
            {/* <Route path="/**" render={() => <h2>Not found</h2>}></Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withCookies(App);
