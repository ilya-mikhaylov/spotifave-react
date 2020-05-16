import { all, fork } from 'redux-saga/effects';
import { watchUserDataRequestStart } from './user-data.sagas';

export const rootSaga = function* root() {
  yield all([fork(watchUserDataRequestStart)]);
};