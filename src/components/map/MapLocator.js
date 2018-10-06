import React, { Component } from 'react';
import { Map } from 'react-store-locator';
import { MAP_API_KEY } from '../../config';
import EventInfoModal from "./EventInfoModal";
import icon from '../../assets/images/basketball-icon.png';

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
        show: false,
        name: 'Second Marker'
      },
      {
        id: 3,
        lat: 50,
        lng: 25.3,
        show: false,
        name: 'Third Marker'
      }
    ];

    const mapStyle = {
      transition: {
        value: 0,
        important: true,
      }
    };

    return (
      <div className="MapLocator">
        <Map locations={locations} googleApiKey={MAP_API_KEY} icon={icon} mapStyle={mapStyle}>
          {(location, closeLocation) => {
            return (
              <EventInfoModal location={location} closeLocation={closeLocation}/>
            )
          }}
        </Map>
      </div>
    );
  }
}

export default Home;
