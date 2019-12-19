import React, { Component } from 'react';
import firebase from './../../config/firebase';
import { withRouter } from 'react-router-dom';
import EmptyMenu from "./../components/emptyMenu"
import EmptySun from "./../components/emptySun"
import {NavLink, Redirect } from "react-router-dom";

class Register extends Component {
    state = {
        email: "",
        password: "",
        error: null,
        redirect: null,
        message: null,
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        const user = firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {

                this.setState({
                    message: "Zarejestrowano! Możesz wrócić do strony głównej i się zalogować:)",
                    email: "",
                    password: ""
                });
                //alert("Zarejestrowano! Teraz możesz się zalogować :)")
            })
            .catch((error) => {
                this.setState({
                    error: error.message,
                })
            });
        return user;
    };

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    };

    render() {

        let errorMessages = this.state.error ?
            (<div className="errors">{this.state.error}</div>) : null;

        let correctMessages = this.state.message ?
            (<div className="message">{this.state.message}</div>) : null;

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const linkStyle = {
            textDecoration: "none",
            color: "#fff",
        };
        return (
            <section className="registerTab">
                <h2>Zarejestruj się</h2>
                <form className="loginRegister registerTable"
                      onSubmit={this.handleSubmit}>
                    {errorMessages}
                    {correctMessages}
                    <label>Email:
                        <input type="email"
                               name="email"
                               onChange={this.handleChange}
                               placeholder="Wpisz adres email"
                               value={this.state.email}
                        />
                    </label>
                    <label>Hasło:
                        <input
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Wpisz hasło"
                            value={this.state.password}
                        />
                    </label>
                    <div className="buttons">
                        <button type="submit">Zarejestruj</button>
                        <NavLink to="/start" style={linkStyle}><button>Wróć</button></NavLink>
                    </div>
                </form>
            </section>
        )
    }
}

function RegisterPage() {
    return (
        <section className="loginBackground">
            <EmptySun/>
            <Register/>
            <EmptyMenu/>
        </section>
    )
}

export default withRouter(RegisterPage);