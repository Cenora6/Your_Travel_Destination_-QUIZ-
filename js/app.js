import React, {Component} from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

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




class App extends Component {

    render() {

        return (

            <AuthProvider>
            <HashRouter>
                <Switch>
                    <PrivateRoute exact path='/' component={Main}/>
                    <PrivateRoute exact path='/newQuiz' component={Quiz} />
                    <PrivateRoute exact path='/history' component={History} />
                    <Route exact path='/start' component={Start} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/quiz" component={QuizQuestion} />
                    <PrivateRoute exact path='/addPlace' component={AddPlace} />
                </Switch>
            </HashRouter>
            </AuthProvider>
        )
    }
}

ReactDOM.render(<App />,
    document.getElementById("app"));
