import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from "@material-ui/core/es/Modal/Modal";
import CreateEventForm from '../event/CreateEventForm';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 8,
    textAlign: 'left',
  },
  action: {
    marginBottom: 20,
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class Location extends Component {

  constructor(props) {
    super(props);

    this.state = {open: false}
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>
              Basketball court
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Du lankai, du tinkleliai, trys dirbantys programuotojai
            </Typography>
            <hr/>
            <Typography className={classes.pos} color="textSecondary">
              Adresas: pas tavo mama
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.action}
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={this.handleOpen}>
              Create event
            </Button>
          </CardActions>
        </Card>

        <Modal
          aria-labelledby="Event creation modal"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper} style={getModalStyle()}>
            <Typography variant="headline">Create Event at kazkoks adresas</Typography>
            <CreateEventForm  />
          </div>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(Location)