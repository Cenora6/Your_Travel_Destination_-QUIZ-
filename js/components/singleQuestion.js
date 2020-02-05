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
        this.loadQuiz();
        this.handleResult();
    }

    handleNextQuestion = (answer) => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1,
            answers: [...this.state.answers, answer],
            userAnswer: answer,
        });
    };

    handleResult = () => {
        this.state.answers.forEach( tag => {
            resultPlaces.forEach(place => {
                if(place.tags.indexOf(tag) > -1) {
                    place.score += 1;
                }
            })
        });

        resultPlaces.sort( (a, b) => {
            return b.score - a.score;
        });

        const min = 0;
        const max = 3;
        const randomResult = Math.random() * (max - min) + min;

        const newResult = [resultPlaces[Math.floor(randomResult)], resultPlaces[Math.floor(randomResult + 1 )]];
        console.log(newResult);

        this.setState({
            result: [...newResult],
            buttonHide: true,
        });

        addHistory( newResult, firebase.auth().currentUser && firebase.auth().currentUser.email )
    };

    render() {

        if (this.state.currentQuestion > 5 ) {
            return (
                <>
                    <section className="quizPage">
                        <table>
                            <tbody>
                            {this.state.result.map( item => {
                                return (
                                    <tr className="resultPlace">
                                        <div className="line1"></div>
                                        <div className="line2"></div>
                                        <div className="line3"></div>
                                        <td className="data">
                                            <h3>{item.name}</h3>
                                            <div class='photos'>
                                                <img src={`${item.photos[0]}`} alt='photo'/>
                                                <img src={`${item.photos[1]}`} alt='photo'/>
                                            </div>
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
            const photos = questionsAnswers[this.state.currentQuestion].photos;
            return (
                <>
                    <section className="quizPage">
                        <h3>Pytanie {this.state.currentQuestion + 1}:</h3>
                        <h4> {questions}</h4>
                        <ul className="quizAnswers">
                            {answers.map( (answer, index) => (
                            <>
                                    <li
                                        key={this.state.currentQuestion}
                                        onClick={() => this.handleNextQuestion(answer)}
                                        className={"answer"} style={ {backgroundImage: `url(${photos[index]})`}} >
                                        ➤ {answer}
                                    </li>
                            </>
                            ))}
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