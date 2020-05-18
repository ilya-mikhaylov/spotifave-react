import * as React from 'react';
import moment from 'moment';
import { ListGroup, Button } from 'reactstrap';
import { SongContainer } from '../Song';
import { UserDataState } from '../../reducers/user-data.reducer';
import { SpotifyAPI } from '../../api';

interface Props {
  userData: UserDataState;
  fetchUserData: () => void;
}

async function createPlaylist() {
  console.log('create playlist function');
  const api = new SpotifyAPI(localStorage.getItem('access_token'));
  try {
    const user = await api.client.getMe();
    const userid = await user.id;
    const favouriteTracks = await api.client.getMyTopTracks({ time_range: 'long_term', limit: 50, offset: 0 });
    const newPlaylist = await api.client.createPlaylist(userid, {
      name: `Your Top 50 by Spotifave (${moment().format('YYYY-MM-DD')})`,
      public: false,
      description: 'The playlist is private by default. Visit spotifave.herokuapp.com for more stats and new playlist.',
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
    alert('OK!');
  } catch (e) {
    console.error(e);
  }
}

export const SongsListComponent: React.FunctionComponent<Props> = (props) => (
  <div>
    <div className="headline-and-button">
      <h3>Top 50 Songs</h3>
      <Button color="success" size="sm" onClick={createPlaylist}>Add playlist</Button>
    </div>
    {props.userData.favouriteTracks
      ? (
        <ListGroup>
          {props.userData.favouriteTracks.items.map((song, i) => (
            <SongContainer
              key={i}
              name={song.name}
              trackUrl={song.external_urls.spotify}
              artists={song.artists.map((artist) => (
                { name: artist.name, url: artist.external_urls.spotify }
              ))}
              album={song.album.name}
              albumUrl={song.album.external_urls.spotify}
              img={song.album.images[2].url}
            />
          ))}
        </ListGroup>
      ) : null}
    <p />
  </div>
);
