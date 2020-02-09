import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { createHashHistory } from 'history'

import Main from './components/main';
import Quiz from './components/mainQuiz';
import History from './components/history';
import Start from "./components/startPage";
import Register from "./login/register";
import Login from "./login/login";
import AddPlace from "./components/addPlace";
import QuizQuestion from "./components/singleQuestion";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./privateRoute";
import { AnimatedSwitch } from 'react-router-transition';

export const history = createHashHistory();

class App extends Component {

    render() {

        return (

            <AuthProvider>
                <HashRouter>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
                            <PrivateRoute exact path='/home' component={Main}/>
                            <PrivateRoute exact path='/newQuiz' component={Quiz} />
                            <PrivateRoute exact path='/history' component={History} />
                            <Route exact path='/' component={Start} />
                            <Route exact path='/register' component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/quiz" component={QuizQuestion} />
                            <PrivateRoute exact path='/addPlace' component={AddPlace} />
                    </AnimatedSwitch>
                </HashRouter>
            </AuthProvider>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById("app"));
