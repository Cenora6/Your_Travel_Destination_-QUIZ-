import React, {Component} from "react";
import Moon from "./moon";
import Menu from "./menu";
import {NavLink} from "react-router-dom";
import "./../../scss/utils/_variables.scss";

const placeId = 0;

class AddPlace extends Component {
    state = {
        placeId: placeId + 1,
        name: "",
        description: "",
        photos: "",
    };

    handleChangeName = e => { //imię
        this.setState({
            name: e.target.value,
        })
    };

    handleChangeDescription = e => { // opis
        this.setState({
            name: e.target.value,
        })
    };

    handleChangePhoto = e => {
        console.log(e.target)
    };

    handleSave = e => {
        e.preventDefault();

    };

    render() {
        const barStyle={
            textDecoration: "none",
            color: "#000",
            display: "block",
        };

        return (
            <>
                <form onSubmit={this.handleSave}>
                    <section className="addPlaceBar">
                        <button><NavLink to="/history" style={barStyle}>
                            Zapisz
                        </NavLink>
                        </button>
                    </section>

                    <section className="addPlace">
                        <div className="decoration">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <div className="add">
                            <div className="namePlace">
                                <span>Nazwa:</span>
                                <input type="text"
                                       placeholder="Wpisz nazwę tego miejsca"
                                       value={this.state.name}
                                       onChange={this.handleChangeName}/>
                            </div>
                            <div className="descriptionPlace">
                                <span>Opis: *</span>
                                <textarea placeholder="Wpisz opis tego miejsca"
                                          placeholder="Napisz, dlaczego chcesz tam pojechać! :)"
                                          value={this.state.value}
                                          onChange={this.handleChangeDescription}></textarea>
                            </div>
                            <div className="photoPlace">
                                <span>Zdjęcia: *</span>
                                <input type="file"
                                       onChange={this.handleChangePhoto}/>
                            </div>
                        </div>
                    </section>
                </form>
            </>
        )
    }
}

function newPlace() {
    return (
        <section className="historyBackground">
            <Moon/>
            <AddPlace/>
            <Menu/>
        </section>
    )
}

export default newPlace;