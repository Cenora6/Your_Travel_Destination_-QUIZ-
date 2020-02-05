import React, {Component} from "react";
import Moon from "./moon";
import Menu from "./menu";
import "./../../scss/utils/_variables.scss";
import firebase from "../../config/firebase";

const placeId = 0;

class AddPlace extends Component {
    state = {
        placeId: placeId + 1,
        name: "",
        description: "",
        photo1: "",
        photo2: "",
        error: false,
        fadeOut: false,
    };

    handleChangeName = e => {
        this.setState({
            name: e.target.value,
        })
    };

    handleChangeDescription = e => {
        this.setState({
            description: e.target.value,
        })
    };

    handleChangePhoto = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSave = (e) => {
        e.preventDefault();
        const {name, description, photo1, photo2} = this.state;

        const email = firebase.auth().currentUser && firebase.auth().currentUser.email;

        if (name.length !== 0 || description.length !== 0 || photo1.length !== 0 || photo2.length !== 0) {
        firebase.firestore().collection("history").add({
            email: email,
            place:
                {
                    name: name,
                    description: description,
                    photos: [photo1, photo2]
                }
        })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                const {history} = this.props;
                history.push('/history')
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });

            this.setState({
                name: "name",
                description: "description",
                photo1: "",
                photo2: "",
            });

        } else {
            this.setState({
                fadeOut: false,
                error: true,
            })
        }
    };

    handleCloseWindow = (e) => {
        this.setState({
            fadeOut: true,
        });
        setTimeout( () => {
            this.setState(
                {
                    error: false,
                });
        }, 1000);
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSave}>
                    <section className="addPlaceBar">
                        <button type='submit'>
                            Zapisz
                        </button>
                    </section>

                    <section className="addPlace">

                        {this.state.error &&
                        <div className={`error ${this.state.fadeOut === true ? "fadeOut" : "fadeIn"}`}>
                            <span className='error-message'>Nie wszystkie pola są uzupełnione.</span>
                            <i className="fas fa-times" onClick={this.handleCloseWindow}></i>
                        </div>}
                        <div className="decoration">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                        <form className="add" onSubmit={this.handleSave}>
                            <div className="namePlace">
                                <span>Nazwa:</span>
                                <input type="text"
                                       placeholder="Wpisz nazwę tego miejsca"
                                       value={this.state.name}
                                       onChange={this.handleChangeName}/>
                            </div>
                            <div className="descriptionPlace">
                                <span>Opis:</span>
                                <textarea placeholder="Wpisz opis tego miejsca"
                                          placeholder="Napisz, dlaczego chcesz tam pojechać! :)"
                                          value={this.state.value}
                                          onChange={this.handleChangeDescription}></textarea>
                            </div>
                            <div className="photoPlace">
                                <span>Zdjęcia (linki): </span>
                                <input type='text' name='photo1' id='photo1' onChange={this.handleChangePhoto}
                                       placeholder='https://'/>
                                <input type='text' name='photo2' id='photo2' onChange={this.handleChangePhoto}
                                       placeholder='https://'/>
                            </div>
                        </form>
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