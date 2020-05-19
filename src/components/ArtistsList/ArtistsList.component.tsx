import * as React from 'react';
import { ListGroup } from 'reactstrap';
import { ArtistContainer } from '../Artist';
import { UserDataState } from '../../reducers/user-data.reducer';

interface Props {
  userData: UserDataState;
  fetchUserData: () => void;
}

export const ArtistsListComponent: React.FunctionComponent<Props> = (props) => (
  <div>
    <div className="headline">
      <h3>Top 50 Artists</h3>
    </div>
    {props.userData.favouriteArtists
      ? (
        <ListGroup>
          {props.userData.favouriteArtists.items.map((artist, i) => (
            <ArtistContainer
              key={i}
              name={artist.name}
              artistUrl={artist.external_urls.spotify}
              img={artist.images[2].url}
            />
          ))}
        </ListGroup>
      ) : null}
    <p />
  </div>
);
