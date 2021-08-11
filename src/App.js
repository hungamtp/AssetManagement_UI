import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import StaffHome from "./components/StaffHome";
import FirstLogin from "./components/FirstLogin";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import ManageAsset from "./components/Manage Asset/ManageAsset";
import LoginFirst from "./components/LoginFirst/LoginFirst";
import CreateNewUser_Page from "./pages/Create new user";
import CreateAsset from "./pages/CreateAsset";
import * as URL from "./constants/URL";
import Index from "./components/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import ChangePassword_Page from "./pages/Change password";
import EditAsset_Page from "./pages/Edit asset";

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
            {/* <ProtectedRoute exact path="/manage/category" component={Home} /> */}
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/first">
              <FirstLogin />
            </Route>
            <Route exact path="/admin">
              <Home />
            </Route>
            <Route exact path="/user">
              <StaffHome />
            </Route>
            <Route exact path="/manageasset">
              <ManageAsset />
            </Route>
            <Route exact path="/editasset">
              <EditAsset_Page />
            </Route>
            <Route exact path="/changepassword">
              <ChangePassword_Page />
            </Route>

            <Route exact path="/createnewuser">
              <CreateNewUser_Page />
            </Route>
            <Route exact path="/login_first">
              <LoginFirst />
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

export default withCookies(App);
