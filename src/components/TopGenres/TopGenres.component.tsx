import * as React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

interface Props {
  userData: object;
  fetchUserData: () => void;
}

export const TopGenresComponent: React.FunctionComponent<Props> = (props) => (
    <div className="headline">
    <h3>Your Top Genres</h3>
    <ListGroup horizontal>
      {props.genres.map((genre, i) => (
        <ListGroupItem key={i} color="success" tag="a" href={`https://www.last.fm/tag/${genre}`}>{genre}</ListGroupItem>
      ))}
    </ListGroup>
  </div>
);
