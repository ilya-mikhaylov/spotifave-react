// This is an old implementation of playlist creation functionality.
// Playlist creator should and will be rewritten.

import moment from 'moment';
import { SpotifyAPI } from '../api';

export async function playlistCreator() {
  console.log('create playlist function');
  const api = new SpotifyAPI(localStorage.getItem('access_token'));
  try {
    const user = await api.client.getMe();
    const userid = await user.id;
    const favouriteTracks = await api.client.getMyTopTracks({ time_range: 'long_term', limit: 50, offset: 0 });
    const newPlaylist = await api.client.createPlaylist(userid, {
      name: `Your Top 50 by Spotifave (${moment().format('YYYY-MM-DD')})`,
      public: false,
      description: 'The playlist is private by default. Visit spotifave.olimpius.net for more stats and new playlist.',
    });
    const newPlaylistId = await newPlaylist.id;
    const favTracksUris = function () {
      const arr = [];
      for (const song of favouriteTracks.items) {
        arr.push(song.uri);
      }
      return arr;
    };
    await api.client.addTracksToPlaylist(newPlaylistId, favTracksUris());
    alert('Playlist created');
  } catch (e) {
    alert(`Error: ${e}`);
  }
}
