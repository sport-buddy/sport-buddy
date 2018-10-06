import React, { Component } from 'react';
import { Search } from 'react-store-locator';
import { Map } from 'react-store-locator';
import Header from '../shared/Header';
import MapLocator from '../map/MapLocator';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <MapLocator />
      </div>
    );
  }
}

export default Home;
