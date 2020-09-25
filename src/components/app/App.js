import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Navigation from '../Navigation/Navigation'
import Welcome from '../../components/welcome/Welcome'
import Clock from '../../components/Clock/Clock'
import Jeopardy from '../Jeopardy/Jeopardy'
import Contact from '../Contact/Contact'
import Page404 from '../errorPage/errorPage'



function App() {

  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path = "/"
          render = {(props) => <Welcome {...props} name="Erick" />}
        />

        <Route
          exact
          path = "/welcome/:name"
          render = {(props) => <Welcome {...props} name={props.match.params.name} />}
        />

        <Route
          exact
          path = "/clock"
          component = {Clock}
        />

        <Route
          exact
          path = "/jeopardy"
          component = {Jeopardy}
        />

        <Route
          exact
          path = "/contact"
          component = {Contact}
        />

        <Route
          exact = {true}
          path = "*"
          component = {Page404}
        />
      </Switch>


    </div>
  );
}

export default App;
