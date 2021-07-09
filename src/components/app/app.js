import React, { Component } from 'react';

import Header from '../header';
import ErrorBoundry from '../error-boundry';

import SwapiService from "../../services/swapi-service";

import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

         <PersonList/>
         <PersonDetails/>

        </div>
      </ErrorBoundry>
    );
  }
}
