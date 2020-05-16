import SpotifyWebApi from 'spotify-web-api-js';

export class SpotifyAPI {
  public client: SpotifyWebApi.SpotifyWebApiJs;

  constructor(token: string) {
    this.client = new SpotifyWebApi();
    this.client.setAccessToken(token);
  }
}
