import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from '../containers/HomeContainer';
import ErrorPage from './ErrorPage';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
