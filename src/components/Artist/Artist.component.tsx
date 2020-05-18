import * as React from 'react';
import {
  ListGroupItem, Media,
} from 'reactstrap';

interface Props {
  artistUrl: string;
  img: string;
  name: string;
}

export const ArtistComponent: React.FunctionComponent<Props> = (props) => (
  <>
  <ListGroupItem tag="a" href={props.artistUrl} action>
    <Media className="mt-1 element-text">
      <Media left middle href={props.artistUrl}>
        <Media className="artist-list-img" object src={props.img} alt="artistpic" />
      </Media>
      <Media body>
        <Media heading>
          <a className="link" href={props.artistUrl}>{props.name}</a>
        </Media>
      </Media>
    </Media>
  </ListGroupItem>
  </>
);
