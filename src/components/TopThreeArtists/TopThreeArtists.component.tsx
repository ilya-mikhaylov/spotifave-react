import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { UserDataState } from '../../reducers/user-data.reducer';

interface Props {
  userData: UserDataState;
  fetchUserData: () => void;
}

export const TopThreeArtistsComponent: React.FunctionComponent<Props> = (props) => (
  <div className="headline">
    <h3>Your favourite artists</h3>
    <ListGroup horizontal>
      {props.userData.topThree.length === 3 ? props.userData.topThree.map((artist, i) => (
        <ListGroupItem key={i} tag="a" href={artist.url}>
          <img src={artist.img} alt={artist.name} />
          <br />
          {artist.name}
        </ListGroupItem>
      )) : null}
    </ListGroup>
  </div>
);
