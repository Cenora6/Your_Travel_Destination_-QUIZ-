import React, {Component} from "react";
import Menu from "./menu"
import Sun from "./sun"

import {
    NavLink,
} from 'react-router-dom';

class QuizPanel extends Component {

    render() {
        const linkStyle = {
            textDecoration: "none",
            color: "#FFF",
            textShadow: "1px 1px #000",
            width: "80%",
            height: "40%",
        };

        return (
            <>
                <section className="quizPage">
                    <h2>Your Travel Destination</h2>
                    <p>Rozwiąż quiz by dowiedzieć się, w które miejsce powinieneś/aś się wybrać!</p>
                    <NavLink to="/quiz" style={linkStyle}><button className="buttonStart">Kliknij by rozpocząć</button></NavLink>
                </section>
            </>
        )
    }
}

function Quiz() {
    return (
        <section className="quizBackground">
            <Sun/>
            <QuizPanel/>
            <Menu/>
        </section>
    )
}

export default Quiz;