import React, {Component, useEffect} from "react";
import {NavLink} from 'react-router-dom';
import Menu from "./menu"
import Moon from "./moon"
import "./../../scss/utils/_variables.scss";
import firebase from "./../../config/firebase";
import checkmark from "./../../images/checkmark.svg";

class HistoryPanel extends Component {
    state = {
        data: [],
        clicked: false,
        id: "",
        visited: [],
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

    componentDidMount = () => {
        this.getHistory();
    };

    getHistory = () => {
        const email = firebase.auth().currentUser.email;

        firebase.firestore().collection("history").where("email", "==", email ).get().then(places => {
            const array = [];
            const arrayVisited = [];

            places.forEach(doc => {
                const place = doc.data();
                place.id = doc.id;
                array.push(place);
            });

            for (let i = 0; i < array.length; i++) {
                if(array[i].place.visited === true) {
                    arrayVisited.push(array[i].id);
                }
            }
            this.setState({
                data: array,
                visited: arrayVisited,
            })
        });
    };

    showDetails = (e, index) => {
        this.setState({
            id: index,
            clicked: !this.state.clicked,
        });
    };

    handleCheckbox = (e) => {
        console.log("1", e.target.checked);

        const visited = this.state.visited;
        let array;

        if (e.target.checked) {
            visited.push(e.target.value)
        } else {
            array = visited.indexOf(e.target.value);
            visited.splice(array, 1)
        }

        this.setState({
            visited: visited,
        });

        if(this.state.visited.indexOf(e.target.name) !== -1) {
            firebase
                .firestore()
                .collection("history")
                .doc(e.target.name)
                .update({
                    "place.visited": true,
                })
                .then(function() {
                    console.log("Document successfully updated!");
                })
        } else {
            firebase
                .firestore()
                .collection("history")
                .doc(e.target.name)
                .update({
                    "place.visited": false,
                })
                .then(function() {
                    console.log("Document successfully updated!");
                })
        }
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
                <section className="historyPage container">
                    <h2>Twoje wakacyjne miejsca</h2>

                    {(this.state.data.length === 0) ?
                        <>
                            <h4>Nie ma jeszcze żadnej historii... :(</h4>
                            <span className='emptyInfo'>Może wykonaj quiz albo dodaj własne miejsce?</span>
                        </>
                        :
                        <table className="historyPlaces">
                            <tbody>
                            {this.state.data.map((places, index) =>
                                <tr key={index}>
                                    <td className="id">
                                        <span>{index + 1}</span>
                                        <div className="line1"></div>
                                        <div className="line2"></div>
                                        <div className="line3"></div>
                                    </td>
                                    <td className="description">
                                        <div className="mainInfo">
                                            <div class='title'>
                                                <h3 onClick={(e) => this.showDetails(e, index)}>{places.place.name}</h3>
                                                {this.state.visited.indexOf(places.id) > -1 ?
                                                    <img src={checkmark} alt='checkmark'/> : null}
                                            </div>
                                            <i className="far fa-minus-square"
                                               onClick={() => this.deleteData(places.id)}></i>
                                        </div>
                                        <div
                                            className={`details ${(this.state.clicked === true && index === this.state.id) ? "animate slideIn" : "hidden"}`}
                                            id={index}>
                                            <div className='photo'>
                                                {places.place.photos.map((photo, index) => {
                                                    return (
                                                        <img src={photo} alt='photo' key={index}/>
                                                    )
                                                })}
                                            </div>
                                            <div className='info'>
                                                <p>{places.place.description}</p>
                                            </div>
                                            <div className='visited'>
                                                <label className="text" htmlFor={index}>Zwiedzone</label>
                                                <input type="checkbox" name={places.id} id={index} value={places.id}
                                                       checked={this.state.visited.indexOf(places.id) > -1}
                                                       onChange={this.handleCheckbox}/>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            )}

                            </tbody>
                        </table>
                    }
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