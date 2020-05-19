import { connect } from 'react-redux';
import { State } from '../../reducers';
import { userDataRequestStartAction } from '../../actions';
import { UserProfileComponent } from './UserProfile.component';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(userDataRequestStartAction()),
});

export const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileComponent);