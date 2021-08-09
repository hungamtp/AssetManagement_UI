import React, { Component } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import StaffHome from "./components/StaffHome";
import FirstLogin from "./components/FirstLogin";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Test from "./components/test/Test";
import ProtectedRoute from "./components/ProtectedRoute";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      role: '',
      isFirstLogin: false
    }
  }

  componentDidMount() {
    this.loadState();
  }

  loadState() {
    this.setState({
      isLogin: localStorage.getItem('accessToken') != null,
      role: localStorage.getItem('role') === 'ROLE_ADMIN' ? 'ADMIN' : 'STAFF',
      isFirstLogin: localStorage.getItem('firstLogin') === 'false'
    })
  }

  render() {
    return (
      <div>
        <Router>
          {
            this.state.isLogin && this.state.isFirstLogin &&
            <Redirect to="/first"/>
          }
          {
            this.state.isLogin && 
            this.state.role === 'ADMIN' &&
            this.state.isFirstLogin === false &&
            <Redirect to="/admin"/>
          }
          {
            this.state.isLogin && 
            this.state.role === 'STAFF' &&
            this.state.isFirstLogin === false &&
            <Redirect to="/staff"/>
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
            <Route exact path="/staff">
              <StaffHome firstLogin={this.state.isFirstLogin}/>
            </Route>
            <Route exact path="/test">
              <Test/>
            </Route>
            <Route path="/**" render={() => <h2>Not found</h2>}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
