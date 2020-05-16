import { combineReducers } from 'redux';
import {
  userDataReducer,
  UserDataState,
} from './user-data.reducer';

export interface State {
  userData: UserDataState;
}

export const rootReducers = combineReducers<State>({
  userData: userDataReducer,
});
