import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';
import * as actions from '../../_actions';
import { connect } from 'react-redux';
import moment from 'moment';

class CreateEventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      comment: null,
      max_participants: 0,
      min_participants: 0,
      start_at: moment().format('YYYY-MM-DD h:00'),
      end_at: moment().format('YYYY-MM-DD h:00'),
      location_id: this.props.location.id,
      category_id: this.props.location.type === 'fitness' ? 4 : 1,
    };
  }

  handleMinCountChange = (event, min_participants) => {
    this.setState({ min_participants });
  };

  handleMaxCountChange = (event, max_participants) => {
    this.setState({ max_participants });
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEndTimeChange = (event) => {
    this.setState({ end_at: event.target.value });
  };

  handleStartTimeChange = (event) => {
    this.setState({ start_at: event.target.value });
  };

  handleSubmit = (event) => {
    this.props.createEventAction(this.state);
  };

  render() {
    const {classes} = this.props;
    const {min_participants, max_participants, start_at, end_at} = this.state;

    return (
      <div>
        <form className={classes.form} noValidate>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Varžybų pavadinimas</InputLabel>
            <Input id="name" name="name" autoFocus onChange={this.handleNameChange}/>
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel>Planuojama varžybų pradžia</InputLabel>
            <Input label="Start time" name="startTime" id="startTime" value={start_at} onChange={this.handleStartTimeChange} />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel>Planuojama varžybų pabaiga</InputLabel>
            <Input label="End time" name="endTime" id="endTime" value={end_at} onChange={this.handleEndTimeChange}/>
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel>Minimalus žaidėjų skaičius: {min_participants}</InputLabel>
            <Slider value={min_participants} min={0} max={20} step={1} onChange={this.handleMinCountChange} />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel>Maksimalus žaidėjų skaičius: {max_participants}</InputLabel>
            <Slider value={max_participants} min={min_participants} max={20} step={1} onChange={this.handleMaxCountChange} />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="comment">Papildomas komentaras</InputLabel>
            <Input name="comment" id="comment" multiline={true} rows="3" onChange={this.handleCommentChange}/>
          </FormControl>

          <Button type="button" fullWidth variant="raised" color="primary" className={classes.submit} onClick={this.handleSubmit}>
            Sukurti
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    eventReducer: state.eventReducer
  };
};

const eventCreate = connect(mapStateToProps, actions)(CreateEventForm);

export default withStyles({})(eventCreate);
