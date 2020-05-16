import * as React from 'react';
import {
  ListGroupItem, Media,
} from 'reactstrap';

interface Props {
  userData: object;
  fetchUserData: () => void;
}

export const SongComponent: React.FunctionComponent<Props> = (props) => (
  <ListGroupItem tag="a" href={props.trackUrl} action>
    <Media className="mt-1 element-text song-container">
      <Media left middle href={props.trackUrl}>
        <Media className="rounded" object src={props.img} alt="albumpic" />
      </Media>
      <Media body>
        <Media heading>
          <a className="link" href={props.trackUrl}>{props.name}</a>
        </Media>
        {props.artists.map((artist, i) => (
          <a key={i} className="link" href={artist.url}>{ (i ? ', ' : '') + (artist.name) }</a>
        ))}
        <br />
        <a className="link song-album-name" href={props.albumUrl}>{props.album}</a>
      </Media>
    </Media>
  </ListGroupItem>
);
