import { connect } from 'react-redux';
import Nav from '../components/shared/Navbar';
import * as actions from '../_actions';

const mapStateToProps = state => {
  return {
    isMenuOpen: state.navReducer.isMenuOpen
  };
};

const NavContainer = connect(mapStateToProps, actions)(Nav);

export default NavContainer;
