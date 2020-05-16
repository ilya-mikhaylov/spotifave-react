import * as React from 'react';
import { Button } from 'reactstrap';

export const WelcomePageComponent: React.FunctionComponent<Props> = () => (
  <div className="welcome-container info">
    <div>
      <div><h1>Your personal top is already here.</h1></div>
      <div><h2>See your top songs and artists. One place, any time.</h2></div>
      <div><a href="http://localhost:3000/login"><Button color="success">Login with Spotify</Button></a></div>
    </div>
    <div>
      <div><h2>What is this?</h2></div>
      <div>
        Have you missed a summary about your favourite music in Spotify?
        Meet Spotifave - it reveals your personal top and creates a based playlist.
      </div>
      <div><a href="http://github.com"><Button color="secondary">Check out GitHub repository</Button></a></div>
    </div>
  </div>
);
