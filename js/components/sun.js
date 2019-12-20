import React, {Component} from "react";
import firebase from "../../config/firebase";
import { Navlink, withRouter, Redirect } from 'react-router'
import {NavLink} from "react-router-dom";

class Sun extends Component {

    state = {
        isLoggedIn: true,
    };

    handleLogOut = e => {
        e.preventDefault();
        firebase.auth().signOut()
            .then(() => {
                console.log("Wylogowano! :)")
            })
            .catch(function(error) {
                alert(error);
            });
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const linkStyle = {
            textDecoration: "none",
            background: "(to right, #b92b27, #1565C0)",
            textShadow: "1px 1px white"
        };
        return (
            <section className="topBar">
                <div className="sunSection"></div>
                <div className="sunName"></div>
                <div className="sunshine"></div>
            </section>
        )
    }
}

export default Sun;

//<NavLink to="/start" style={linkStyle}>WYLOGUJ</NavLink>