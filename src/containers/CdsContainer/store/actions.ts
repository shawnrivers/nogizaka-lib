import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import { Dispatch } from 'react';
import { fetchSingles } from '../../../apis/SinglesAPI';
import { fetchAlbums } from '../../../apis/AlbumsAPI';

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

    const sortedSingles = singles
      .slice()
      .sort((itemA: ISingle, itemB: ISingle) => new Date(itemB.release).getTime() - new Date(itemA.release).getTime());

    dispatch({
      type: CdsActionTypes.FETCH_SINGLES_FULFILLED,
      payload: sortedSingles,
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
    const data = await fetchAlbums();

    const sortedData = data
      .slice()
      .sort((itemA: IAlbum, itemB: IAlbum) => new Date(itemB.release).getTime() - new Date(itemA.release).getTime());

    dispatch({
      type: CdsActionTypes.FETCH_ALBUMS_FULFILLED,
      payload: sortedData,
    });
  } catch (err) {
    dispatch({
      type: CdsActionTypes.FETCH_ALBUMS_REJECTED,
    });

    console.log('Error:', err);
  }
};
