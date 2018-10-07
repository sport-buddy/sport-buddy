import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Info } from 'react-store-locator';
import Paper from '@material-ui/core/Paper';
import LocationContainer from '../../containers/LocationContainer.js'

class EventInfoModal extends Component {
  render() {
    let location = this.props.location;
    let closeLocation = this.props.closeLocation;

    const infoStyle = {
      width: '300px',
      height: '200px'
    };

    const { classes } = this.props;

    return (
      <Info show={this.props.loaded && this.props.locationId === location.id} style={infoStyle}>
        <div>
          <Paper className={classes.paper}>
            <LocationContainer location={location} />
            <div onClick={() => closeLocation(location.id)}>[x]</div>
          </Paper>
        </div>
      </Info>
    );
  }
}

export default withStyles({})(EventInfoModal);
