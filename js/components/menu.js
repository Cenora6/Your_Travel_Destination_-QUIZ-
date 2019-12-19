import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import firebase from "../../config/firebase";

class Menu extends Component {
    render() {
        const activeStyle = {
            fontSize: "2.5rem",
        };
        const linkStyle = {
            textDecoration: "none",
            color: "#ffbf00",
        };

        return (
            <section className="menuWave">
                <div className="menu">
                    <ul className="menuBar">
                        <li><NavLink to='/' style={linkStyle} activeStyle={activeStyle}><i className="fab fa-fort-awesome"></i></NavLink></li>
                        <span className="loginName">{firebase.auth().currentUser && firebase.auth().currentUser.email}</span>
                        <li><NavLink to="/newQuiz" style={linkStyle} activeStyle={activeStyle}>Nowy QUIZ</NavLink></li>
                        <li><NavLink to="/history" style={linkStyle} activeStyle={activeStyle}>Historia</NavLink></li>
                    </ul>
                </div>
                <div className="wave wave1"/>
                <div className="wave wave2"/>
                <div className="wave wave3"/>
                <div className="wave wave4"/>
            </section>
        )
    }
}

export default Menu;