import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Settings from '@material-ui/icons/Settings';
import Face from '@material-ui/icons/Face';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class MenuDrawer extends React.Component {
  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Nustatymai" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profilis" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Face />
            </ListItemIcon>
            <ListItemText primary="Draugai" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
        <Drawer
          anchor="bottom"
          open={this.props.isMenuOpen}
          onClose={() => {
            this.props.closeMenuAction(false);
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.props.closeMenuAction(false);
            }}
            onKeyDown={() => {
              this.props.closeMenuAction(false);
            }}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MenuDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuDrawer);
