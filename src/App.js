import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import StaffHome from "./components/StaffHome";
import FirstLogin from "./components/FirstLogin";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Test from "./components/test/Test";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import ManageAsset from "./components/Manage Asset/ManageAsset";
import LoginFirst from "./components/LoginFirst/LoginFirst";
import Logout from "./components/Logout";
import Edit from "./components/Manage Asset_Edit/Edit";
import ChangePassword from "./components/Change Password/ChangePassword";
import CreateNewUser_Page from "./pages/Create new user";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateNewUser from "./components/Create New User";
import ChangePassword_Page from "./pages/Change password";
import EditAsset_Page from "./pages/Edit asset";

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.cookies.get('user') || '',
    }
  }


  componentDidMount() {
    this.loadState();
  }

  loadState() {
    this.setState({
      user: this.props.cookies.get('user') || ''
    })
  }
  render() {
    return (
      <div> 
        <Router>
          {
            this.state.user !== '' && this.state.user.firstLogin === false &&
            <Redirect to="/first"/>
          }
          {
            this.state.user !== '' && 
            this.state.user.role === 'ROLE_ADMIN' &&
            this.state.user.firstLogin === true &&
            <Redirect to="/admin"/>
          }
          {
            this.state.user !== '' && 
            this.state.user.role === 'ROLE_USER' &&
            this.state.user.firstLogin === true &&
            <Redirect to="/user"/>
          }
          <Switch>
            {/* <ProtectedRoute exact path="/manage/category" component={Home} /> */}
            <Route exact path="/" >
              <Login onLogin={() => this.loadState()}/>
            </Route>
            <Route exact path="/first">
              <FirstLogin onSuccess={() => this.loadState()}/>
            </Route>
            <Route exact path="/admin">
              <Home />
            </Route>
            <Route exact path="/user">
              <StaffHome />
            </Route>
            <Route exact path="/test">
              <Test/>
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
              <CreateNewUser_Page />
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

export default withCookies(App);