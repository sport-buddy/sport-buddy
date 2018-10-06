import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';

class CreateEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      comment: null,
      count: 0,
      startTime: new Date(),
      endTime: new Date()
    };
  }

  handleCountChange = (event, count) => {
    this.setState({ count });
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEndTimeChange = (event) => {
    this.setState({ endTime: event.target.value });
  };

  handleStartTimeChange = (event) => {
    this.setState({ startTime: event.target.value });
  };

  handleSubmit = (event) => {
    console.log(this.state);
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <form className={classes.form} noValidate>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Event name</InputLabel>
            <Input id="name" name="name" autoFocus onChange={this.handleNameChange}/>
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <Input label="Start time" name="startTime" id="startTime" onChange={this.handleStartTimeChange} />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <Input label="End time" name="endTime" id="endTime" onChange={this.handleEndTimeChange}/>
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel>Needed players: {this.state.count}</InputLabel>
            <Slider value={this.state.count} min={0} max={20} step={1} onChange={this.handleCountChange} />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="comment">Comment</InputLabel>
            <Input name="comment" id="comment" multiline={true} rows="3" onChange={this.handleCommentChange}/>
          </FormControl>


          <Button type="button" fullWidth variant="raised" color="primary" className={classes.submit} onClick={this.handleSubmit}>
            Create
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles({})(CreateEventForm);
