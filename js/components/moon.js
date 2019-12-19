import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import firebase from "../../config/firebase";

class Moon extends Component {

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
        const linkStyle = {
            textDecoration: "none",
            color: "#000000",
        };

        return (
            <section className="topBar">
                <div className="moonSection"></div>

                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
                <div className="circle5"></div>
                <div className="circle6"></div>
                <div className="circle7"></div>
                <div className="circle8"></div>
                <div className="circle9"></div>
                <div className="circle10"></div>

                <div className="signOut">
                    <NavLink to="/start" style={linkStyle} onClick={this.handleLogOut}>WYLOGUJ</NavLink>
                </div>
                <div className="moonShine"></div>
            </section>
        )
    }
}

export default Moon;