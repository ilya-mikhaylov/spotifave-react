import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

interface Props {
  userData: object;
  fetchUserData: () => void;
}

export const TopGenresComponent: React.FunctionComponent<Props> = (props) => (
  <div className="headline">
    <h3>Your favourite artists</h3>
    <ListGroup horizontal>
      {props.topThree.length === 3 ? props.topThree.map((artist, i) => (
        <ListGroupItem key={i} tag="a" href={artist.url}>
          <img src={artist.img} alt={artist.name} />
          <br />
          {artist.name}
        </ListGroupItem>
      )) : null}
    </ListGroup>
  </div>
);
