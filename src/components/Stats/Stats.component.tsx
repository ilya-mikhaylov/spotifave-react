import React, { useEffect } from 'react';
import { UserDataState } from '../../reducers/user-data.reducer';
import { TopThreeArtistsComponent } from '../TopThreeArtists/TopThreeArtists.component';
import { TopGenresComponent } from '../TopGenres/TopGenres.component';
import { SongsListComponent } from '../SongsList/SongsList.component';
import { ArtistsListComponent } from '../ArtistsList/ArtistsList.component';

interface Props {
    userData: UserDataState;
    fetchUserData: () => void;
  }

export const StatsComponent: React.FunctionComponent<Props> = (props) => {
  useEffect(() => {
    props.fetchUserData();
  }, []);
  return (
    <>
      <div className="stats-container info">
        <div className="head-container">
          <div className="top-three-container">
            <TopThreeArtistsComponent userData={props.userData} fetchUserData={props.fetchUserData} />
          </div>
          <div className="top-genres-container">
            <TopGenresComponent userData={props.userData} fetchUserData={props.fetchUserData} />
          </div>
        </div>
        <div className="songs-artists">
          <div className="songs">
            <SongsListComponent userData={props.userData} fetchUserData={props.fetchUserData} />
          </div>
          <div className="artists">
            <ArtistsListComponent userData={props.userData} fetchUserData={props.fetchUserData} />
          </div>
        </div>
      </div>
    </>
  );
};
