import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import { Dispatch } from 'redux';
import { fetchSingles } from '../../../apis/SinglesAPI';
import { fetchAlbums } from '../../../apis/AlbumsAPI';
import { sortByDate } from '../../../utils/arrays';

export enum CdsActionTypes {
  FETCH_SINGLES_PENDING = '@nogizaka-lib/cds/FETCH_SINGLES_PENDING',
  FETCH_SINGLES_REJECTED = '@nogizaka-lib/cds/FETCH_SINGLES_REJECTED',
  FETCH_SINGLES_FULFILLED = '@nogizaka-lib/cds/FETCH_SINGLES_FULFILLED',
  FETCH_ALBUMS_PENDING = '@nogizaka-lib/cds/FETCH_ALBUMS_PENDING',
  FETCH_ALBUMS_REJECTED = '@nogizaka-lib/cds/FETCH_ALBUMS_REJECTED',
  FETCH_ALBUMS_FULFILLED = '@nogizaka-lib/cds/FETCH_ALBUMS_FULFILLED',
}

export type CdsActions =
  | {
      type: CdsActionTypes.FETCH_SINGLES_PENDING;
    }
  | {
      type: CdsActionTypes.FETCH_SINGLES_REJECTED;
    }
  | {
      type: CdsActionTypes.FETCH_SINGLES_FULFILLED;
      payload: ISingle[];
    }
  | {
      type: CdsActionTypes.FETCH_ALBUMS_PENDING;
    }
  | {
      type: CdsActionTypes.FETCH_ALBUMS_REJECTED;
    }
  | {
      type: CdsActionTypes.FETCH_ALBUMS_FULFILLED;
      payload: IAlbum[];
    };

export const getSingles = () => async (dispatch: Dispatch<CdsActions>): Promise<void> => {
  dispatch({ type: CdsActionTypes.FETCH_SINGLES_PENDING });

  try {
    const singles = await fetchSingles();

    dispatch({
      type: CdsActionTypes.FETCH_SINGLES_FULFILLED,
      payload: sortByDate(singles, 'release', 'desc'),
    });
  } catch (err) {
    dispatch({
      type: CdsActionTypes.FETCH_SINGLES_REJECTED,
    });

    console.log('Error:', err);
  }
};

export const getAlbums = () => async (dispatch: Dispatch<CdsActions>): Promise<void> => {
  dispatch({ type: CdsActionTypes.FETCH_ALBUMS_PENDING });

  try {
    const albums = await fetchAlbums();

    dispatch({
      type: CdsActionTypes.FETCH_ALBUMS_FULFILLED,
      payload: sortByDate(albums, 'release', 'desc'),
    });
  } catch (err) {
    dispatch({
      type: CdsActionTypes.FETCH_ALBUMS_REJECTED,
    });

    console.log('Error:', err);
  }
};
