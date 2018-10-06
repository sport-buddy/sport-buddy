import React, { Component } from 'react';
import MapLocator from '../map/MapLocator';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import NavContainer from '../../containers/NavContainer';

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
    this.props.fetchCategoriesAction();

    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="Home">
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <NavContainer />
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
