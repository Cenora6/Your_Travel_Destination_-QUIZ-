import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import firebase from './../../config/firebase';
import { withRouter, Redirect } from 'react-router'
import EmptyMenu from "./../components/emptyMenu"
import EmptySun from "./../components/emptySun"

class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: null,
        redirect: null
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.setState({
                    redirect: "/"
                });
            })
            .catch((error) => {
                if (password.length < 6 && email.length < 3 && email.indexOf("@") < 0)

                this.setState({
                    error: error.message,
                    email: "",
                    password: ""
                })
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    };

    render() {
        let errorMessages = this.state.error ?
            (<div className="errors">{this.state.error}</div>) : null;

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>
        }

        const linkStyle = {
            textDecoration: "none",
            color: "#fff",
        };
        return (
            <section className="logInTab">
                <h2>Zaloguj się</h2>
                <form className="loginRegister loginTable"
                      onSubmit={this.handleSubmit}>
                    {errorMessages}
                    <label>Email:
                        <input type="email"
                               placeholder="Wpisz adres email"
                               name="email"
                               value={this.state.email}
                               onChange={this.handleChange}/>
                    </label>

                    <label>Hasło:
                        <input type="password"
                               name="password"
                               value={this.state.password}
                               placeholder="Wpisz hasło"
                               onChange={this.handleChange}/>
                    </label>
                    <div className="buttons">
                        <button type="submit">Zaloguj</button>
                        <NavLink to="/start" style={linkStyle}><button>Wróć</button></NavLink>
                    </div>
                </form>
            </section>
        );
    }
}

function LoginPage() {
    return (
        <section className="loginBackground">
            <EmptySun/>
            <Login/>
            <EmptyMenu/>
        </section>
    )
}

export default withRouter(LoginPage);