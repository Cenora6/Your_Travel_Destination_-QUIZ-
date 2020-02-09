import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import firebase from "../../config/firebase";

class Menu extends Component {

    handleLogOut = e => {
        e.preventDefault();
        firebase.auth().signOut()
            .then(() => {
            })
            .catch(function(error) {
                alert(error);
            });
    };

    render() {
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

                        <li className="logOut links">
                            <span className="loginName">{firebase.auth().currentUser && firebase.auth().currentUser.email}</span>
                            <NavLink exact to="/start" style={logoutStyle} onClick={this.handleLogOut}>WYLOGUJ</NavLink>
                        </li>
                        <li className='links'>
                            <NavLink exact to='/home' style={linkStyle} activeClassName='activeLink'><i className="fab fa-fort-awesome"></i></NavLink>
                        </li>
                        <li className='links'>
                            <NavLink exact to="/newQuiz" style={linkStyle} activeClassName='activeLink'>Nowy QUIZ</NavLink>
                        </li>
                        <li className='links'>
                            <NavLink exact to="/history" style={linkStyle} activeClassName='activeLink'>Historia</NavLink>
                        </li>
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