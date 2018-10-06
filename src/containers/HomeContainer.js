import { connect } from 'react-redux';
import Home from '../components/home/Home';
import * as actions from '../_actions';

const mapStateToProps = state => {
  return {
    categoriesReducer: state.categoriesReducer,
    locationReducer: state.locationReducer,
    filterLocations: state.filterLocationsReducer
  };
};

const NavContainer = connect(mapStateToProps, actions)(Home);

export default NavContainer;
