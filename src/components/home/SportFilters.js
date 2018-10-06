import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class SportFilters extends Component {
  state = {
    value: 0
  };
  render() {
    const { categoriesReducer } = this.props;
    const { data } = categoriesReducer;
    const { value } = this.state;
    const mapCategories = () => {
      return data.map((d, i) => {
        return (
          <Tab
            key={d.id}
            label={d.name}
            onClick={() => {
              this.setState({
                value: i
              });
            }}
          />
        );
      });
    };
    return (
      <div>
        {' '}
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            {mapCategories()}
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default SportFilters;
