import React, {Component} from 'react';
import {Info} from 'react-store-locator';
import Location from '../location/Location';

class EventInfoModal extends Component {

  render() {
    let location = this.props.location;
    let closeLocation = this.props.closeLocation;

    return (
      <Info show={location.show}>
        <div style={{width: '300px', height: '200px'}}>
          <Location />
          <div onClick={() => closeLocation(location.id)}></div>
        </div>
      </Info>
    )
  }
}

export default EventInfoModal