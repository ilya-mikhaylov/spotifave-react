import { connect } from 'react-redux';
import { State } from '../../reducers';
import { userDataRequestStartAction } from '../../actions';
import { TopGenresComponent } from './TopGenres.component';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(userDataRequestStartAction()),
});

export const TopGenresContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopGenresComponent);