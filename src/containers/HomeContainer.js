import { connect } from 'react-redux';
import Home from '../components/home/Home';
import * as actions from '../_actions';

const mapStateToProps = state => {
  return { categoriesReducer: state.categoriesReducer };
};

const NavContainer = connect(mapStateToProps, actions)(Home);

export default NavContainer;
