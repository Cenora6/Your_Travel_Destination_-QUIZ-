import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import firebase from './../../config/firebase';
import EmptyMenu from "./../components/emptyMenu"
import EmptySun from "./../components/emptySun"
import {history} from "./../app"

class Login extends Component {
    state = {
        email: "",
        password: "",
        error: false,
        fadeOut: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                history.push("/home")
            })
            .catch((error) => {
                this.setState({
                    fadeOut: false,
                    error: true,
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

    handleCloseWindow = (e) => {
        this.setState({
            fadeOut: true,
        });
        setTimeout( () => {
            this.setState(
                {
                    error: false,
                });
        }, 1000);
    };

    render() {
        const linkStyle = {
            textDecoration: "none",
            color: "#fff",
        };
        return (
            <section className="logInTab">
                {this.state.error &&
                <div className={`error ${this.state.fadeOut === true ? "fadeOut" : "fadeIn"}`}>
                    <span className='error-message'>Błędne dane.</span>
                    <i className="fas fa-times" onClick={this.handleCloseWindow}></i>
                </div>}
                <h2>Zaloguj się</h2>
                <form className="loginRegister loginTable"
                      onSubmit={this.handleSubmit}>
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
                        <NavLink to="/" style={linkStyle}><button>Wróć</button></NavLink>
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

export default LoginPage;