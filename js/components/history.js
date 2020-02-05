import React, {Component, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import Menu from "./menu"
import Moon from "./moon"
import "./../../scss/utils/_variables.scss";
import firebase from "./../../config/firebase";

class HistoryPanel extends Component {
    state = {
        data: [],
        clicked: false,
        id: "",
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

                array.push(place);
            });

            this.setState({
                data: array,
            })

        });
    };

    showDetails = (e, index) => {
        this.setState({
            id: index,
            clicked: !this.state.clicked,
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
                                <td className="description">
                                    <div className="mainInfo" onClick={(e) => this.showDetails (e, index)}>
                                        <h3>{places.place.name}</h3>
                                        <i className="far fa-minus-square" onClick={() => this.deleteData (places.id)}></i>
                                    </div>
                                    <div className={`details ${(this.state.clicked === true && index === this.state.id) ? "animate slideIn" : "hidden"}`} id={index}>
                                        <div className='photo'>
                                            {places.place.photos.map( (photo, index) => {
                                                return (
                                                    <img src={photo} alt='photo' key={index}/>
                                                )
                                            })}
                                        </div>
                                        <div className='info'>
                                            <p>{places.place.description}</p>
                                        </div>
                                        <div className='visited'>
                                            <label className="text" htmlFor="visited">Visited</label>
                                            <input type="checkbox" name="visited" id="visited"/>
                                        </div>
                                    </div>

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