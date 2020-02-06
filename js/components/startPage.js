import React, {Component} from "react";
import {
    NavLink,
} from 'react-router-dom';

import EmptyMenu from "./emptyMenu"
import EmptySun from "./emptySun"

class Welcome extends Component {
    render() {

        const linkStyle = {
            textDecoration: "none",
            color: "#fff",
        };
        return (
            <section className="loginPage container">
                <h2>Witaj, przybyszu!</h2>

                <div className="fadeIn">
                    <p>Lubisz podróżować? Zwiedzać nowe kraje i poznawać ich kulturę?
                        Jeżeli kiedyś zastanawiałeś/aś się, w jakie miejsce wybrać się podczas twoich wakacji/urlopu
                        i miałeś/aś problem z zadecydowaniem... trafiłeś/aś w odpowiednie miejsce!</p>

                    <p>Projekt <span>"Your Travel Destination"</span> (Twój cel podróży) pozwoli Ci na bazie twoich preferencji
                        za pomocą quizu wybrać najbardziej pasujące miejsce na twóją podróż!</p>

                    <p>Możesz tutaj również przeglądać historię wyników quizu, oznaczać miejsca jako "Zwiedzone" lub
                        "Do zwiedzenia", a także dodać własne miejsca, o których marzysz! :) </p>
                </div>

                <div className="fadeIn loginRegister">
                    <div className="logIn">
                        <span>Masz już konto?</span>
                        <NavLink to="/login" style={linkStyle}><button>Zaloguj</button></NavLink>
                    </div>

                    <div className="register">
                        <span>Jesteś tu pierwszy raz?</span>
                        <NavLink to="/register" style={linkStyle}><button>Zarejestruj</button></NavLink>
                    </div>
                </div>
            </section>
        )
    }
}

function StartPage() {
    return (
        <section className="loginBackground">
            <EmptySun/>
            <Welcome/>
            <EmptyMenu/>
        </section>
    )
}

export default StartPage;