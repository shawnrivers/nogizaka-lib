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

export const fetchSingles = () => (dispatch: Dispatch<any>): Promise<void> => {
  dispatch({ type: cdsActionTypes.FETCH_SINGLES_PENDING });
  return fetch('https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: cdsActionTypes.FETCH_SINGLES_FULFILLED,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: cdsActionTypes.FETCH_SINGLES_REJECTED,
      });
      console.log(err);
    });
};

export const fetchAlbums = () => (dispatch: Dispatch<any>): Promise<void> => {
  dispatch({ type: cdsActionTypes.FETCH_ALBUMS_PENDING });
  return fetch('https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/albums.json')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: cdsActionTypes.FETCH_ALBUMS_FULFILLED,
        payload: data,
      });
    })
    .catch(err => {
      dispatch({
        type: cdsActionTypes.FETCH_ALBUMS_REJECTED,
      });
      console.log(err);
    });
};
