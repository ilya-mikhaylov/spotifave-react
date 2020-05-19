import { connect } from 'react-redux';
import { State } from '../../reducers';
import { userDataRequestStartAction } from '../../actions';
import { NavbarComponent } from './Navbar.component';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(userDataRequestStartAction()),
});

export const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarComponent);