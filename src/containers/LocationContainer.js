import { connect } from 'react-redux';
import Location from '../components/location/Location';
import * as actions from '../_actions';

const mapStateToProps = state => {
  return {
    eventReducer: state.eventReducer
  };
};

const LocationContainer = connect(mapStateToProps, actions)(Location);

export default LocationContainer;