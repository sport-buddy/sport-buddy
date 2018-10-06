import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

class Location extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            Basketball court
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Du lankai, du tinkleliai, trys dirbantys programuotojai
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Adresas: pas tavo mama
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Create event</Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(Location)