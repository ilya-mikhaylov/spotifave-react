import { connect } from 'react-redux';
import { State } from '../../reducers';
import { userDataRequestStartAction } from '../../actions';
import { ArtistsListComponent } from './number-viewer.component';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(userDataRequestStartAction()),
});

export const ArtistsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistsListComponent);