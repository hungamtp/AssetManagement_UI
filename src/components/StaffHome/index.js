import React, { Component } from 'react';
import Navbar from "../Navbar";
import { Redirect } from "react-router-dom";


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Navbar businessName="Staff Home Page" />
                {
                    localStorage.getItem('accessToken') != null &&
                    localStorage.getItem('role') === 'ROlE_STAFF' &&
                    localStorage.getItem('firstLogin') === 'false' &&
                    <Redirect to="/first" />
                }
                {
                    localStorage.getItem('accessToken') == null &&
                    localStorage.getItem('role') !== 'ROlE_STAFF' &&
                    <Redirect to="/" />
                }
            </div>
        )
    }
}
