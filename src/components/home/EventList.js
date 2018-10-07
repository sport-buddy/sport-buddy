import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class SportFilters extends Component {
  handleSubmit = eventId => {
    this.props.joinEvent({ userId: 1, eventId: eventId });
  };

  getEventTime = event => {
    let startTime = moment(event.start_at);
    let endTime = moment(event.end_at);

    return startTime.format('MM-DD H:mm') + ' - ' + endTime.format('H:mm');
  };

  render() {
    const showEvents = () => {
      let eventList = [];
      const events = this.props.filterLocations.data.map(location => {
        location.events.map(event => {
          if (event.length !== 0) {
            event['address'] = location.address;
            eventList = [...eventList, event];
          }
        });
      });
      return eventList.map(l => {
        return (
          <Paper
            key={l.id}
            style={{ margin: 5, padding: 10, marginBottom: 25 }}
          >
            <Table>
              <TableHead>
                <TableRow style={{ height: 34 }}>
                  <TableCell style={{ fontSize: 16 }}>{l.name}</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow style={{ height: 34 }}>
                  <TableCell component="th" scope="row">
                    Adresas
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {l.address}
                  </TableCell>
                </TableRow>

                <TableRow style={{ height: 34 }}>
                  <TableCell component="th" scope="row">
                    Planuojamas laikas
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {this.getEventTime(l)}
                  </TableCell>
                </TableRow>

                <TableRow style={{ height: 34 }}>
                  <TableCell component="th" scope="row">
                    Dalyvių kiekis
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {l.min_participants} - {l.max_participants}
                  </TableCell>
                </TableRow>

                <TableRow style={{ height: 34 }}>
                  <TableCell component="th" scope="row">
                    Prisijungusiu žmonių kiekis
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {l.participants.length}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Button
              disabled={l.participants.filter(u => u.id === 1).length > 0}
              fullWidth
              variant="raised"
              color="primary"
              onClick={() => {
                this.handleSubmit(l.id);
              }}
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              {l.participants.filter(u => u.id === 1).length > 0
                ? 'Prisijungęs'
                : 'Prisijungti'}
            </Button>
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
