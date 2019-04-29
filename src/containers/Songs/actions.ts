import { ISongs } from '../../models/ISong';
import { Dispatch } from 'redux';
import { fetchSongs } from '../../apis/SongsAPI';
import { arrayToObject } from '../../utils/arrays';

export enum SongsActionTypes {
  FETCH_SONGS_PENDING = '@nogizaka-lib/songs/FETCH_SONGS_PENDING',
  FETCH_SONGS_REJECTED = '@nogizaka-lib/songs/FETCH_SONGS_REJECTED',
  FETCH_SONGS_FULFILLED = '@nogizaka-lib/songs/FETCH_SONGS_FULFILLED',
}

export type SongsActions =
  | {
      type: SongsActionTypes.FETCH_SONGS_PENDING;
    }
  | {
      type: SongsActionTypes.FETCH_SONGS_REJECTED;
    }
  | {
      type: SongsActionTypes.FETCH_SONGS_FULFILLED;
      payload: ISongs;
    };

export const getSongs = () => async (dispatch: Dispatch<SongsActions>): Promise<void> => {
  dispatch({ type: SongsActionTypes.FETCH_SONGS_PENDING });

  try {
    const songs = await fetchSongs();

    dispatch({
      type: SongsActionTypes.FETCH_SONGS_FULFILLED,
      payload: arrayToObject(songs, 'key'),
    });
  } catch (err) {
    dispatch({ type: SongsActionTypes.FETCH_SONGS_REJECTED });
  }
};
