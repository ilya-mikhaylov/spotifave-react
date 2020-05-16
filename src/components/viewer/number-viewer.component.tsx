import * as React from 'react';

interface Props {
  userData: object;
  fetchUserData: () => void;
}

export const NumberViewerComponent: React.FunctionComponent<Props> = props => (
  <>
    <h5>Generated numbers collection:</h5>
    <ul>
      {JSON.stringify(props.userData)}
    </ul>
    <a href="/login">Click me!</a>
    <div onClick={props.fetchUserData}>test</div>
  </>
);
