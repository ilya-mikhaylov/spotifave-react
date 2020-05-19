export const actionIds = {
  GET_USER_DATA_REQUEST_START: '[0] Request Spotify user data.',
  GET_USER_DATA_REQUEST_COMPLETED: '[1] Request Spotify user data complete.',
};

export interface BaseAction {
    type : string;
    payload?;
  }
