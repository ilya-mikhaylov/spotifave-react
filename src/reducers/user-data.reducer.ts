import { BaseAction, actionIds } from '../common';

export type UserDataState = {
    user: any,
    favouriteTracks: any,
    favouriteArtists: any,
    topThree: any,
    topGenres: any,
};

export const userDataReducer = (
  state: UserDataState = {
    user: null,
    favouriteTracks: null,
    favouriteArtists: null,
    topThree: null,
    topGenres: null,
  },
  action: BaseAction,
) => {
  switch (action.type) {
    case actionIds.GET_USER_DATA_REQUEST_COMPLETED:
      return action.payload;
  }
  return state;
};
