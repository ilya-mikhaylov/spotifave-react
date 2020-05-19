import { connect } from 'react-redux';
import { State } from '../../reducers';
import { userDataRequestStartAction } from '../../actions';
import { ArtistComponent } from './Artist.component';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(userDataRequestStartAction()),
});

export const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistComponent);