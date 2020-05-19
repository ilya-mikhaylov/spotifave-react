import { call, put, takeEvery } from 'redux-saga/effects';
import { SpotifyAPI } from '../api';
import { userDataRequestCompletedAction } from '../actions';
import { actionIds } from '../common';

export function* watchUserDataRequestStart() {
  yield takeEvery(
    actionIds.GET_USER_DATA_REQUEST_START,
    requestUserData,
  );
}

function* requestUserData() {
  const getHashParams: any = () => {
    const hashParams = {};
    let e; const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  };
  if (getHashParams().access_token) {
    localStorage.setItem('access_token', getHashParams().access_token);
  }
  function removeHash() {
    history.pushState('', document.title, window.location.pathname + window.location.search);
  }
  removeHash();
  const api = new SpotifyAPI(localStorage.getItem('access_token'));
  async function fetchNewData() {
    const data = {
      user: await api.client.getMe(),
      favouriteTracks: await api.client.getMyTopTracks({ time_range: 'long_term', limit: 50, offset: 0 }),
      favouriteArtists: await api.client.getMyTopArtists({ time_range: 'long_term', limit: 50, offset: 0 }),
      topThree: null,
      topGenres: null,
    };
    const topThree = data.favouriteArtists.items.slice(0, 3).map(
      (artist) => ({
        name: artist.name,
        url: artist.external_urls.spotify,
        img: artist.images[2].url,
      }),
    );

    const mostFreqGenres = () => {
      const arr = [];
      for (const i of data.favouriteArtists.items) {
        for (const j of i.genres) {
          arr.push(j);
        }
      }
      const counts: number = arr.reduce((a, c) => {
        a[c] = (a[c] || 0) + 1;
        return a;
      }, {});
      const maxCount = Math.max(...Object.values(counts));
      return (Object.keys(counts).filter((k) => counts[k] === maxCount));
    };
    data.topThree = topThree;
    data.topGenres = mostFreqGenres();
    return data;
  }

  const userData = yield call(fetchNewData);
  yield put(userDataRequestCompletedAction(userData));
}
