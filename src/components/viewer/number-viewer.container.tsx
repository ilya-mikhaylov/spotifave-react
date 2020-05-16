import { connect } from 'react-redux';
import { State } from '../../reducers';
import { userDataRequestStartAction } from '../../actions';
import { NumberViewerComponent } from './number-viewer.component';

const mapStateToProps = (state: State) => ({
  userData: state.userData,
});

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(userDataRequestStartAction()),
});

export const NumberViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberViewerComponent);
