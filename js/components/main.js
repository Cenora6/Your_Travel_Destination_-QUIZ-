import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import Menu from "./menu"
import Sun from "./sun"
import firebase from "../../config/firebase";

class MainPanel extends Component {

    render() {
        const activeStyle = {
            fontSize: "2rem",
        };
        const linkStyle = {
            textDecoration: "none",
            color: "#fff",
        };

        return (
            <>
                <section className="mainPanelBox">

                    <div className="leftMainBox box">
                        <span>Witaj!</span>
                        <p>
                            Zdarzyło ci się kiedyś zastanawiać się, w jakie miejsce chcesz pojechać na wakacje?
                            Trafiłeś/aś więc w odpowiednie miejsce! Zagraj w quiz i dowiedz się, jakie miejsce na wakacyjne
                            wyprawy będzie dla ciebie najlepsze! :)
                        </p>
                        <button><NavLink exact to="/newQuiz" style={linkStyle} activeStyle={activeStyle}>➤ Rozpocznij nowy QUIZ</NavLink></button>
                    </div>

                    <div className="rightMainBox box">
                        <span>Chcesz przejrzeć swoją historię?</span>
                        <p>Masz w planach wreszcie urlop? Planujesz miejsce wyjazdu na wakacje? Sprawdź swoją historię
                        i zaplanuj niezapomniane wakacje w jednym z tych miejsc :) A może chcesz dodać nowe miejsce do
                        planowanych? Zrobisz to też tam!</p>
                        <button><NavLink exact to="/history" style={linkStyle} activeStyle={activeStyle}>➤ Twoja historia</NavLink></button>
                    </div>
                </section>
            </>
        )
    }
}

function Main() {
    return (
        <section className="mainBackground">
            <Sun/>
            <MainPanel/>
            <Menu/>
        </section>
    )
}

export default Main;