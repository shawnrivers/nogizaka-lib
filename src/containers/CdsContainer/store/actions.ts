import { cdsActionTypes } from './actionTypes';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import { Dispatch } from 'react';

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

// Action Creators

export const fetchSingles = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: cdsActionTypes.FETCH_SINGLES_PENDING });

  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json',
    );
    const data = await response.json();

    const sortedData = data.slice().sort((itemA: ISingle, itemB: ISingle) => itemB.number - itemA.number);

    dispatch({
      type: cdsActionTypes.FETCH_SINGLES_FULFILLED,
      payload: sortedData,
    });
  } catch (err) {
    dispatch({
      type: cdsActionTypes.FETCH_SINGLES_REJECTED,
    });

    console.log('Error:', err);
  }
};

export const fetchAlbums = () => async (dispatch: Dispatch<any>) => {
  dispatch({ type: cdsActionTypes.FETCH_ALBUMS_PENDING });
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/albums.json',
    );
    const data = await response.json();

    const sortedData = data.slice().sort((itemA: IAlbum, itemB: IAlbum) => itemB.number - itemA.number);

    dispatch({
      type: cdsActionTypes.FETCH_ALBUMS_FULFILLED,
      payload: sortedData,
    });
  } catch (err) {
    dispatch({
      type: cdsActionTypes.FETCH_ALBUMS_REJECTED,
    });
    console.log(err);
  }
};
