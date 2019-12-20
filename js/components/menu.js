import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import firebase from "../../config/firebase";

class Menu extends Component {
    render() {
        const activeStyle = {
            fontSize: "2.1rem",
            textDecoration: "none",
            textShadow: "1px 1px 2px #000, 0 0 2rem #FDC830"
        };
        const linkStyle = {
            textDecoration: "none",
            color: "#ffbf00",
        };

        const logoutStyle = {
            color: "#ffbf00",
            textDecoration: "none",
            fontSize: "1rem"
        };

        return (
            <section className="menuWave">
                <div className="menu">
                    <ul className="menuBar">

                        <li class="LogOut">
                            <span className="loginName">{firebase.auth().currentUser && firebase.auth().currentUser.email}</span>
                            <NavLink exact to="/start" style={logoutStyle} onClick={this.handleLogOut}>WYLOGUJ</NavLink>
                        </li>
                        <li><NavLink exact to='/' style={linkStyle} activeStyle={activeStyle}><i className="fab fa-fort-awesome"></i></NavLink></li>
                        <li><NavLink exact to="/newQuiz" style={linkStyle} activeStyle={activeStyle}>Nowy QUIZ</NavLink></li>
                        <li><NavLink exact to="/history" style={linkStyle} activeStyle={activeStyle}>Historia</NavLink></li>
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