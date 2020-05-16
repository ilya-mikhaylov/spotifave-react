import * as React from 'react';
import { ListGroup, Button } from 'reactstrap';
import { SongContainer } from '../Song';
import { UserDataState } from '../../reducers/user-data.reducer'

interface Props {
  userData: UserDataState;
  fetchUserData: () => void;
}

export const SongsListComponent: React.FunctionComponent<Props> = (props) => (
  <div>
    <div className="headline-and-button">
      <h3>Top 50 Songs</h3>
      <Button color="success" size="sm" onClick={this.props.createPlaylist}>Add playlist</Button>
    </div>
    {props.userData.favouriteTracks
      ? (
        <ListGroup>
          {props.userData.favouriteTracks.map((song, i) => (
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
