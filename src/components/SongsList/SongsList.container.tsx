import { connect } from 'react-redux';
import { State } from '../../reducers';
import { userDataRequestStartAction } from '../../actions';
import { SongsListComponent } from './SongsList.component';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(userDataRequestStartAction()),
});

export const SongsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsListComponent);