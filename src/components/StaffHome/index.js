import React, { Component } from 'react';
import Navbar from "../Navbar";
import { Redirect } from "react-router-dom";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class index extends Component {

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

    }

    render() {
        return (
            <div>
                <Navbar businessName="Staff Home Page" />
                {
                    this.state.user === '' &&
                    <Redirect to="/" />
                }
                {
                    this.state.user !== '' &&
                    this.state.user.role !== 'ROLE_USER' &&
                    <Redirect to="/" />
                }
                {
                    this.state.user !== '' &&
                    this.state.user.firstLogin === false &&
                    <Redirect to="/first" />
                }
            </div>
        )
    }
}

export default withCookies(index);