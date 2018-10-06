import React, { Component } from 'react';
import { Search } from 'react-store-locator';
import { Map } from 'react-store-locator';
import Header from '../shared/Header';
import Navbar from '../shared/Navbar';
import MapLocator from '../map/MapLocator';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import deepOrange from '@material-ui/core/colors/deepOrange';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

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
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="Home">
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Navbar />
            </Grid>
            <Grid item xs={12} sm={5}>
              <div className={classes.paper}>
                <Paper className={classes.paper}>xs=6</Paper>
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className={classes.paper}>
                <MapLocator className={classes.paper} />
              </div>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Home);
