import React, { Component } from 'react';
import firebase from './../../config/firebase';
import EmptyMenu from "./../components/emptyMenu"
import EmptySun from "./../components/emptySun"
import {NavLink } from "react-router-dom";
import {history} from "./../app"

class Register extends Component {
    state = {
        email: "",
        password: "",
        errorData: false,
        errorAccount: false,
        fadeOut: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                history.push("/home")
            })
            .catch((error) => {
                console.log(error);
                if(error.code === "auth/invalid-email") {
                    this.setState({
                        fadeOut: false,
                        errorData: true,
                        email: "",
                        password: ""
                    })
                } else {
                    this.setState({
                        fadeOut: false,
                        errorAccount: true,
                        email: "",
                        password: ""
                    })
                }
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
                    errorAccount: false,
                    errorData: false,
                });
        }, 1000);
    };

    render() {

        const linkStyle = {
            textDecoration: "none",
            color: "#fff",
        };
        return (
            <section className="registerTab container">

                {this.state.errorData &&
                <div className={`error ${this.state.fadeOut === true ? "fadeOut" : "fadeIn"}`}>
                    <span className='error-message'>Błędne dane.</span>
                    <i className="fas fa-times" onClick={this.handleCloseWindow}></i>
                </div>}

                {this.state.errorAccount &&
                <div className={`error ${this.state.fadeOut === true ? "fadeOut" : "fadeIn"}`}>
                    <span className='error-message'>Użytkownik istnieje już w bazie.</span>
                    <i className="fas fa-times" onClick={this.handleCloseWindow}></i>
                </div>}

                <h2>Zarejestruj się</h2>
                <form className="loginRegister registerTable"
                      onSubmit={this.handleSubmit}>
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
                        <NavLink to="/" style={linkStyle}><button>Wróć</button></NavLink>
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

export default RegisterPage;