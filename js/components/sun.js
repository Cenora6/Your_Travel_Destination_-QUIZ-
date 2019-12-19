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
                alert("Wylogowano! :)")
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
            color: "#000000",
        };
        return (
            <section className="topBar">
                <div className="sunSection"></div>
                <div className="sunName">{firebase.auth().currentUser && firebase.auth().currentUser.email}</div>
                <div className="signOut">
                    <NavLink to="/start" style={linkStyle} onClick={this.handleLogOut}>WYLOGUJ</NavLink>
                </div>
                <div className="sunshine"></div>
            </section>
        )
    }
}

export default Sun;

//<NavLink to="/start" style={linkStyle}>WYLOGUJ</NavLink>