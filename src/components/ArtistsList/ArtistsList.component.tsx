import * as React from 'react';
import { ListGroup } from 'reactstrap';
import Artist from '../Artist';

interface Props {
  userData: object;
  fetchUserData: () => void;
}

export const ArtistsListComponent: React.FunctionComponent<Props> = (props) => (
  <div>
    <div className="headline">
      <h3>Top 50 Artists</h3>
    </div>
    {this.props.artists
      ? (
        <ListGroup>
          {this.props.artists.map((artist, i) => (
            <Artist
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
