import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

class CreateEventForm extends Component {
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="firstName">First name</InputLabel>
          <Input id="firstName" name="firstName" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="lastName">Last name</InputLabel>
          <Input name="lastName" id="lastName" />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="raised"
          color="primary"
          className={classes.submit}
        >
          Create
        </Button>
      </form>
    );
  }
}

export default CreateEventForm;
