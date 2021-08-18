import React, { Component } from 'react';
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import { withRouter } from "react-router-dom";
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import OwnAssignment from "../OwnAssignment";

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
                <Menu business={business.HOME} />
                <OwnAssignment/>
                {
                    this.state.user === '' &&
                    this.props.history.push('/')
                }
                {
                    this.state.user !== '' &&
                    this.state.user.role !== 'ROLE_USER' &&
                    this.props.history.push('/')
                }
                {
                    this.state.user !== '' &&
                    this.state.user.firstLogin === false &&
                    this.props.history.push('/first')
                }
            </div>
        )
    }
}

export default withCookies(withRouter(index));