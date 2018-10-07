import React, { Component } from 'react';
import MapLocator from '../map/MapLocator';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import NavContainer from '../../containers/NavContainer';
import SportFilters from './SportFilters';
import EventList from './EventList';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FFD54F',
      main: '#004D40',
      dark: '#FF6F00',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f44336'
    }
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class Home extends Component {
  componentDidMount() {
    this.props.fetchCategoriesAction();
    this.props.fetchLocationsActions();
  }

  render() {
    console.log(this.props.filterLocations.data);
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="Home">
          <Grid item xs={12}>
            <NavContainer />
          </Grid>
          <Grid item xs={12}>
            <SportFilters
              fetchCategoriesAction={this.props.fetchCategoriesAction}
              categoriesReducer={this.props.categoriesReducer}
              filterBasketballAction={this.props.filterBasketballAction}
              filterFitnessAction={this.props.filterFitnessAction}
              filterRunningAction={this.props.filterRunningAction}
              filterTabbleTennisAction={this.props.filterTabbleTennisAction}
              locationReducer={this.props.locationReducer}
            />
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={5}>
              <div className={classes.paper}>
                <Paper className={classes.paper}>
                  <EventList filterLocations={this.props.filterLocations}>
                    xs=6
                  </EventList>
                </Paper>
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className={classes.paper}>
                <MapLocator className={classes.paper} />
              </div>
            </Grid>
          </Grid>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Home);
