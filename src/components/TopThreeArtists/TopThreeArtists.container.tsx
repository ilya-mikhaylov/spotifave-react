import { connect } from 'react-redux';
import { State } from '../../reducers';
import { userDataRequestStartAction } from '../../actions';
import { TopThreeArtistsComponent } from './TopThreeArtists.component';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(userDataRequestStartAction()),
});

export const TopThreeArtistsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopThreeArtistsComponent);