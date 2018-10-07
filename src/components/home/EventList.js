import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class SportFilters extends Component {
  render() {
    console.log(this.props.filterLocations.data);

    const showEvents = () => {
      let eventList = [];
      const events = this.props.filterLocations.data.map(location => {
        location.events.map(event => {
          if (event.length !== 0) {
            console.log(event);
            eventList = [...eventList, event];
          }
        });
      });
      return eventList.map(l => {
        return (
          <Paper key={l.id} style={{ margin: 5 }}>
            <Typography variant="headline" component="h6">
              {l.name}
            </Typography>
            <Typography component="p">{`Dalyvių skaičius: ${
              l.min_participants
            } - ${l.max_participants}`}</Typography>
            <Button color="primary">Prisijungti</Button>
          </Paper>
        );
      });
    };

    showEvents();

    return (
      <div>
        <h4>{this.props.filterLocations.lt}</h4>
        {showEvents()}
      </div>
    );
  }
}

export default SportFilters;
