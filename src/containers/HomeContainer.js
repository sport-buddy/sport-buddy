import { connect } from 'react-redux';
import Home from '../components/home/Home';
import * as actions from '../_actions';

const mapStateToProps = state => {
  isMenuOpen: state.navReducer.isMenuOpen;
};

const NavContainer = connect(null, actions)(Home);

export default NavContainer;
