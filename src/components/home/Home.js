import React, { Component } from 'react';
import { Search } from 'react-store-locator';
import { Map } from 'react-store-locator';
import Header from '../shared/Header';
import MapLocator from '../map/MapLocator';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Header />
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
    );
  }
}

export default withStyles(styles)(Home);
