import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import StaffHome from "./components/StaffHome";
import FirstLogin from "./components/FirstLogin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Test from "./components/test/Test";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import ManageAsset from "./components/Manage Asset/ManageAsset";
import Edit from "./components/Manage Asset_Edit/Edit";
import ChangePassword from "./components/Change Password/ChangePassword";
import CreateNewUser_Page from "./pages/Create new user";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./components/Users";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.cookies.get("user") || "",
    };
  }

  componentDidMount() {
    this.loadState();
  }

  loadState() {
    this.setState({
      user: this.props.cookies.get("user") || "",
    });
  }
  render() {
    return (
      <div>
        <Router>
          {this.state.user !== "" && this.state.user.firstLogin === false && (
            <Redirect to="/first" />
          )}
          {this.state.user !== "" &&
            this.state.user.role === "ROLE_ADMIN" &&
            this.state.user.firstLogin === true && <Redirect to="/admin" />}
          {this.state.user !== "" &&
            this.state.user.role === "ROLE_USER" &&
            this.state.user.firstLogin === true && <Redirect to="/user" />}
          <Switch>
            {/* <ProtectedRoute exact path="/manage/category" component={Home} /> */}
            <Route exact path="/">
              <Login onLogin={() => this.loadState()} />
            </Route>
            <Route exact path="/first">
              <FirstLogin onSuccess={() => this.loadState()} />
            </Route>
            <Route exact path="/admin">
              <Home />
            </Route>
            <Route exact path="/test">
              <Index />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/user">
              <StaffHome />
            </Route>
            <Route exact path="/test">
              <Test />
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

            <Route path="/**" render={() => <h2>Not found</h2>}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withCookies(App);
