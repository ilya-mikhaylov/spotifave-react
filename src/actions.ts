import { BaseAction, actionIds } from './common';

export const userDataRequestStartAction = (): BaseAction => ({
  type: actionIds.GET_USER_DATA_REQUEST_START,
  payload: null,
});

export const userDataRequestCompletedAction = (
  userData: object,
): BaseAction => ({
  type: actionIds.GET_USER_DATA_REQUEST_COMPLETED,
  payload: userData,
});