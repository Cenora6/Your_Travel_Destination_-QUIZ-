import React, {Component, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import Menu from "./menu"
import Moon from "./moon"
import "./../../scss/utils/_variables.scss";
import AddPlace from "./addPlace";
import resultPlaces from "../database/result";
import firebase from "./../../config/firebase";


// show data??



    // firebase.firestore().collection("history").where("email", "==", firebase.auth().currentUser && firebase.auth().currentUser.email)
    //     .get()
    //     .then(function(querySnapshot) {
    //         querySnapshot.forEach(function(doc) {
    //             // doc.data() is never undefined for query doc snapshots
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     })
    //     .catch(function(error) {
    //         console.log("Error getting documents: ", error);
    //     });

class HistoryPanel extends Component {
    state = {
        data: [],
    };

    // delete data
    deleteData = () => {

        let dataDelete = this.database.ref('history/place' + this.id);
        dataDelete.remove()

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

                        {this.state.data.map( places =>

                                <tr key={places.id}>

                                    <td className="id">
                                        <span>{places.id}</span>
                                        <div className="line1"></div>
                                        <div className="line2"></div>
                                        <div className="line3"></div>
                                    </td>
                                    <td className="photo">
                                        {/*<img src={places.photos[0]}/>*/}
                                        {/*<img src={places.photos[1]}/>*/}
                                    </td>
                                    <td className="description">
                                        <h3>{places.place.name}</h3>
                                        <p>{places.place.description}
                                        </p>
                                    </td>
                                    <td className="visited">
                                        <div>
                                            <span>Will visit</span>
                                            <input type="radio" name="visit" id="wantToVisit"/>
                                        </div>
                                        <div>
                                            <span>Visited</span>
                                            <input type="radio" name="visit" id="visited"/>
                                        </div>

                                    </td>
                                    <td className="delete">
                                        <i className="far fa-minus-square" onClick={this.deleteData}></i>
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