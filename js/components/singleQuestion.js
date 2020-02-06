import React, {Component} from "react";
import Sun from "./sun";
import Menu from "./menu";
import questionsAnswers from "./../database/questions";
import resultPlaces from "./../database/result";
import firebase from "firebase";

class QuizPanel extends Component {
    state = {
        userAnswer: null,
        currentQuestion: 0,
        answers: [],
        answersPhotos: [],
        result: [],
        loading: true,
    };


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
        setTimeout( () => {
            this.setState({
                loading: false,
            });
        }, 1000);
    }

    handleNextQuestion = (answer) => {
        this.setState({
            loading: true,
            currentQuestion: this.state.currentQuestion + 1,
            answers: [...this.state.answers, answer],
            userAnswer: answer,
        });
        setTimeout( () => {
            this.setState({
                loading: false,
            });
        }, 1000);

        (this.state.currentQuestion === 5) && this.handleResult();
    };

    handleResult = () => {
        let newResult = [];
        this.state.answers.forEach( tag => {
            resultPlaces.forEach(place => {
                if (place.tags.indexOf(tag) > -1) {
                    place.score += 1;
                }
            });
        });

        resultPlaces.sort((a, b) => {
            return b.score - a.score;
        });

        const min = 0;
        const max = 3;
        let randomResult = Math.floor(Math.random() * (max - min) + min);
        let randomResult2 = Math.floor(Math.random() * (max - min) + min);

        if (randomResult === randomResult2) {
            randomResult2 = Math.floor(Math.random() * (max - min) + min);
        }

        newResult.push(resultPlaces[randomResult]);
        newResult.push(resultPlaces[randomResult2]);

        this.setState({
            result: [...newResult]
        });

        newResult.forEach( newResult => {
            firebase.firestore().collection("history").add({
                place: newResult,
                email: firebase.auth().currentUser && firebase.auth().currentUser.email,
            })
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
        });
    };

    render() {
        if (this.state.currentQuestion > 5 ) {
            return (
                (this.state.loading === true) ?
                    <section className="quizPage">
                        <div className="sk-cube-grid">
                            <div className="sk-cube sk-cube1"></div>
                            <div className="sk-cube sk-cube2"></div>
                            <div className="sk-cube sk-cube3"></div>
                            <div className="sk-cube sk-cube4"></div>
                            <div className="sk-cube sk-cube5"></div>
                            <div className="sk-cube sk-cube6"></div>
                            <div className="sk-cube sk-cube7"></div>
                            <div className="sk-cube sk-cube8"></div>
                            <div className="sk-cube sk-cube9"></div>
                        </div>
                    </section>
                    :
                    <section className="quizPage">
                        <table>
                            <tbody>
                            {this.state.result.map(item => {
                                return (
                                    <tr className="resultPlace">
                                        <td className="line1"></td>
                                        <td className="line2"></td>
                                        <td className="line3"></td>
                                        <td className="data">
                                            <h3>{item.name}</h3>
                                            <div className='photos'>
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
            )
        } else {
            const questions = questionsAnswers[this.state.currentQuestion].title;
            const answers = questionsAnswers[this.state.currentQuestion].answers;
            const photos = questionsAnswers[this.state.currentQuestion].photos;
            return (
                <>
                    <section className="quizPage">
                        {this.state.loading === true  ?
                            <div className="sk-cube-grid">
                                <div className="sk-cube sk-cube1"></div>
                                <div className="sk-cube sk-cube2"></div>
                                <div className="sk-cube sk-cube3"></div>
                                <div className="sk-cube sk-cube4"></div>
                                <div className="sk-cube sk-cube5"></div>
                                <div className="sk-cube sk-cube6"></div>
                                <div className="sk-cube sk-cube7"></div>
                                <div className="sk-cube sk-cube8"></div>
                                <div className="sk-cube sk-cube9"></div>
                            </div>
                            :
                            <>
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
                            </>
                        }
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