import React, {Component, useContext} from "react";
import Sun from "./sun";
import Menu from "./menu";
import questionsAnswers from "./../database/questions";
import resultPlaces from "./../database/result";
import firebase from "firebase";
import addHistory from "./database";

class QuizPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userAnswer: null,
            currentQuestion: 0,
            answers: [],
            answersPhotos: [],
            result: [],
            buttonHide: false,
        };
    }

    loadQuiz = () => {
        const {currentQuestion} = this.state;

        this.setState(() => {
            return {
                questions: questionsAnswers[currentQuestion].title,
            }
        })
    };

    componentDidMount() {
        this.loadQuiz()
    }

    handleNextQuestion = (answer) => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            answers: [...this.state.answers, answer],
            userAnswer: answer,
        });
    };

    handleResult = () => {

        for (let i = 0; i < resultPlaces.length; i++) {
            const tags = resultPlaces[i].tags; // zwraca wszystkie tagi dla każdego miejsca
            // console.log(tags)
        }
        console.log(this.state.answers); // zwraca odpowiedzi użytkownika
        this.state.answers.forEach( tag => {
            // console.log(tag); <- wszystkie tagi wybrane przez użytkownika wypisane osobn
            resultPlaces.forEach(place => {
                // console.log(place);

                if(place.tags.indexOf(tag) > -1) {
                    place.score += 1;
                }
            })
        });

        resultPlaces.sort( (a, b) => {
            return b.score - a.score;
        });

        const newResult = [resultPlaces[0], resultPlaces[1], resultPlaces[2]];
        console.log(newResult);

        this.setState({
            result: [...newResult],
            buttonHide: true,
        });

        //const {currentUser} = this.context(AuthContext);
        //console.log(firebase.auth().currentUser && firebase.auth().currentUser.email);
        addHistory( newResult, firebase.auth().currentUser && firebase.auth().currentUser.email )
    };

    render() {

        if (this.state.currentQuestion > 4 ) {
            return (
                <>
                    <section className="quizPage">

                        <button className="buttonResult"
                                onClick={this.handleResult}
                        >SHOW YOUR RESULT</button>
                        <table>

                            <tbody>
                            {this.state.result.map( item => {
                                return (
                                    <tr className="resultPlace">
                                        <div className="line1"></div>
                                        <div className="line2"></div>
                                        <div className="line3"></div>

                                        <td className="descr">
                                            <h3>{item.name}</h3>
                                            <p>{item.description}</p>
                                        </td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </section>
                </>
            )
        } else {
            const questions = questionsAnswers[this.state.currentQuestion].title;
            const answers = questionsAnswers[this.state.currentQuestion].answers;
            return (
                <>
                    <section className="quizPage">
                        <h3>Pytanie {this.state.currentQuestion + 1}:</h3>
                        <h4> {questions}</h4>
                        <ul className="quizAnswers">
                            {answers.map( (answer) => (
                                    <>
                                        <li
                                            key={this.state.currentQuestion}
                                            onClick={ () => this.handleNextQuestion (answer) }
                                            className={"answer"}>
                                            ➤ {answer}
                                        </li>
                                    </>
                                )
                            )}
                        </ul>
                    </section>
                </>
            )
        }

    }
}

function QuizQuestion() {
    return (
        <section className="quizBackground">
            <Sun/>
            <QuizPanel/>
            <Menu/>
        </section>
    )
}

export default QuizQuestion;