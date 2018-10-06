import React, { Component } from 'react';
import { Map } from 'react-store-locator';
import { MAP_API_KEY } from '../../config';
import EventInfoModal from "./EventInfoModal";
import icon from '../../assets/images/basketball-icon.png';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {loaded: false, locationId: null};
  }

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

    const myPin = (props) => (
      <div
        style={{
          cursor: 'pointer',
          backgroundColor: 'purple',
          height: '25px',
          width: '25px',
          border: '2px solid white'
        }}
        onClick={() => {
          this.setState(prev => ({loaded: !prev.loaded, locationId: props.id}));
          props.handleLocationClick(props.id)}
        }
      >
        {props.children}
      </div>
    );

    return (
      <div className="MapLocator">
        <Map pin={myPin} locations={locations} googleApiKey={MAP_API_KEY} icon={icon}>
          {(location, closeLocation) => {
            return (
              <EventInfoModal
                location={location}
                closeLocation={closeLocation}
                loaded={this.state.loaded}
                locationId={this.state.locationId}/>
            )
          }}
        </Map>
      </div>
    );
  }
}

export default Home;
