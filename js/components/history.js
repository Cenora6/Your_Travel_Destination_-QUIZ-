import React, {Component, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import Menu from "./menu"
import Moon from "./moon"
import "./../../scss/utils/_variables.scss";
import AddPlace from "./addPlace";
import resultPlaces from "../database/result";
import firebase from "./../../config/firebase";

class HistoryPanel extends Component {
    state = {
        data: [],
    };

    deleteData = (id) => {

        firebase.firestore().collection("history").doc(id).delete().then( () => {
            console.log("Document successfully deleted!");
            this.setState({
                data: this.state.data.filter(item => item.id !== id)
            })
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    };

    componentDidMount() {
        this.getHistory();
    }

    getHistory = () => {

        const email = firebase.auth().currentUser && firebase.auth().currentUser.email;

        firebase.firestore().collection("history").where("email", "==", email ).get().then(places => {
            const array = [];

            places.forEach(doc => {
                const place = doc.data();
                place.id = doc.id;
                //console.log(places); // wyświetla wszystkie miejsca (email: ..., place: {...} )

                array.push(place);
            });

            this.setState({
                data: array,
            })

        });
    };

    render() {
        const barStyle = {
            textDecoration: "none",
            color: "#000",
            display: "block",
        };

        return (
            <>
                <section className="addPlaceBar">
                    <button><NavLink to="/addPlace" style={barStyle}>
                        Dodaj swoje miejsce
                        <i className="far fa-plus-square"></i>
                    </NavLink>
                    </button>
                </section>
                <section className="historyPage">
                    <h2>Twoje wakacyjne miejsca</h2>
                    <table className="historyPlaces">

                        <tbody>

                        {this.state.data.map( (places, index) =>

                            <tr key={index}>

                                <td className="id">
                                    <span>{index + 1}</span>
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                    <div className="line3"></div>
                                </td>
                                <td className="photo">

                                    {places.place.photos.map( (photo) => {
                                        return (
                                            <>
                                                <img src={photo}/>
                                            </>
                                        )
                                    })}
                                </td>
                                <td className="description">
                                    <h3>{places.place.name}</h3>
                                    <p>{places.place.description}
                                    </p>
                                </td>
                                {/*<td className="visited">*/}
                                {/*    <div>*/}
                                {/*        <span>Will visit</span>*/}
                                {/*        <input type="radio" name="visit" id="wantToVisit"/>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <span>Visited</span>*/}
                                {/*        <input type="radio" name="visit" id="visited"/>*/}
                                {/*    </div>*/}

                                {/*</td>*/}
                                <td className="delete">
                                    <i className="far fa-minus-square" onClick={() => this.deleteData (places.id)}></i>
                                </td>
                            </tr>

                        )}

                        </tbody>
                    </table>
                </section>
            </>
        )
    }
}

function History() {
    return (
        <section className="historyBackground">
            <Moon/>
            <HistoryPanel/>
            <Menu/>
        </section>
    )
}

export default History;