import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import Menu from "./menu"
import Moon from "./moon"
import "./../../scss/utils/_variables.scss";
import AddPlace from "./addPlace";
import resultPlaces from "../database/result";

class HistoryPanel extends Component {
    state = {
        items: []
    };

    handleDelete = e => {
        let rows = [...this.state.rows];
        rows.splice(e, 1);
        this.setState({
            rows: rows
        })
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

                resultPlaces.map( (item, index) => {

            }
                <section className="historyPage">
                    <h2>Twoje wakacyjne miejsca</h2>
                    <table className="historyPlaces">

                        <tbody>

                        {resultPlaces.map( (item, index) => (
                            <>
                                <tr key={resultPlaces[index].id}>

                                    <td className="id">
                                        <span>{resultPlaces[index].id}</span>
                                        <div className="line1"></div>
                                        <div className="line2"></div>
                                        <div className="line3"></div>
                                    </td>
                                    <td className="photo">
                                        <img src={resultPlaces[index].photos[0]}/>
                                        <img src={resultPlaces[index].photos[1]}/>
                                    </td>
                                    <td className="description">
                                        <h3>{resultPlaces[index].name}</h3>
                                        <p>{resultPlaces[index].description}
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
                                        <i className="far fa-minus-square" onClick={this.handleDelete}></i>
                                    </td>
                                </tr>

                            </>
                        ))}

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