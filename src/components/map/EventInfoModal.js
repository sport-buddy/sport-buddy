import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Info} from 'react-store-locator';
import Location from '../location/Location';
import Paper from '@material-ui/core/Paper';

class EventInfoModal extends Component {

  render() {
    let location = this.props.location;
    let closeLocation = this.props.closeLocation;

    const infoStyle = {
      width: '300px',
      height: '200px',
    };

    const { classes } = this.props;

    if (location.show) {
      console.log('memes');
    }

    return (
      <Info show={location.show} style={infoStyle}>
        <div>
          <Paper className={classes.paper}>
            <Location />
            <div onClick={() => closeLocation(location.id)}>[x]</div>
          </Paper>
        </div>
      </Info>
    )
  }
}

export default withStyles({})(EventInfoModal);