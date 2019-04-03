import { cdsActionTypes } from './actionTypes';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import { Dispatch } from 'react';
import { fetchSingles } from '../../../apis/SinglesAPI';
import { fetchAlbums } from '../../../apis/AlbumsAPI';

export type cdsActions =
  | {
      type: cdsActionTypes.FETCH_SINGLES_PENDING;
    }
  | {
      type: cdsActionTypes.FETCH_SINGLES_REJECTED;
    }
  | {
      type: cdsActionTypes.FETCH_SINGLES_FULFILLED;
      payload: ISingle[];
    }
  | {
      type: cdsActionTypes.FETCH_ALBUMS_PENDING;
    }
  | {
      type: cdsActionTypes.FETCH_ALBUMS_REJECTED;
    }
  | {
      type: cdsActionTypes.FETCH_ALBUMS_FULFILLED;
      payload: IAlbum[];
    };

export const getSingles = () => async (dispatch: Dispatch<any>): Promise<void> => {
  dispatch({ type: cdsActionTypes.FETCH_SINGLES_PENDING });

  try {
    const singles = await fetchSingles();

    const sortedSingles = singles
      .slice()
      .sort((itemA: ISingle, itemB: ISingle) => new Date(itemB.release).getTime() - new Date(itemA.release).getTime());

    dispatch({
      type: cdsActionTypes.FETCH_SINGLES_FULFILLED,
      payload: sortedSingles,
    });
  } catch (err) {
    dispatch({
      type: cdsActionTypes.FETCH_SINGLES_REJECTED,
    });

    console.log('Error:', err);
  }
};

export const getAlbums = () => async (dispatch: Dispatch<any>): Promise<void> => {
  dispatch({ type: cdsActionTypes.FETCH_ALBUMS_PENDING });

  try {
    const data = await fetchAlbums();

    const sortedData = data
      .slice()
      .sort((itemA: IAlbum, itemB: IAlbum) => new Date(itemB.release).getTime() - new Date(itemA.release).getTime());

    dispatch({
      type: cdsActionTypes.FETCH_ALBUMS_FULFILLED,
      payload: sortedData,
    });
  } catch (err) {
    dispatch({
      type: cdsActionTypes.FETCH_ALBUMS_REJECTED,
    });

    console.log('Error:', err);
  }
};
