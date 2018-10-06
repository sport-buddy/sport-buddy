import React, { Component } from 'react';
import { Search } from 'react-store-locator';
import { Map } from 'react-store-locator';

class Home extends Component {
  render() {
    const locations = [
      {
        id: 1,
        lat: 50,
        lng: 25.1,
        show: false,
        name: 'First Marker'
      },
      {
        id: 2,
        lat: 50,
        lng: 25.2,
        show: true,
        name: 'Second Marker'
      },
      {
        id: 3,
        lat: 50,
        lng: 25.3,
        show: true,
        name: 'Third Marker'
      }
    ];

    return (
      <div className="MapLocator">
        <Map
          height={'400px'}
          width={'300px'}
          locations={locations}
          googleApiKey={'Your Key Here'}
        />
      </div>
    );
  }
}

export default Home;
