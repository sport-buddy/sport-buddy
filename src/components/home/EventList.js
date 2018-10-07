import React, { Component } from 'react';

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
        return <div key={l.id}>{l.name}</div>;
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
