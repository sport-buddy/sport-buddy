import React, { Component } from 'react';
import { Map } from 'react-store-locator';
import { MAP_API_KEY, INITIAL_MAP_LOCATION } from '../../config';
import EventInfoModal from "./EventInfoModal";

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {loaded: false, locationId: null};
  }

  render() {
    const myPin = (props) => (
      <div
        style={{
          cursor: 'pointer',
          backgroundColor: '#004D40',
          height: '25px',
          width: '25px',
          border: '2px solid #FFD54F',
          borderRadius: '50%'
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
        <Map pin={myPin} locations={this.props.locations} googleApiKey={MAP_API_KEY} initSearch={ INITIAL_MAP_LOCATION }>
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
