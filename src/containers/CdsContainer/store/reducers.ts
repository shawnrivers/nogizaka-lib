import { cdsActions } from './actions';
import { cdsActionTypes } from './actionTypes';
import { FetchStatus } from '../../../utils/constants';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';

export type ICdsState = {
  singles: {
    fetchStatus: FetchStatus;
    data: ISingle[];
  };
  albums: {
    fetchStatus: FetchStatus;
    data: IAlbum[];
  };
};

export const initialCdsState: ICdsState = {
  singles: {
    fetchStatus: FetchStatus.None,
    data: [],
  },
  albums: {
    fetchStatus: FetchStatus.None,
    data: [],
  },
};

export const cdsReducer = (state: ICdsState = initialCdsState, action: cdsActions): ICdsState => {
  switch (action.type) {
    case cdsActionTypes.FETCH_SINGLES_PENDING:
      return {
        ...state,
        singles: {
          fetchStatus: FetchStatus.Pending,
          data: state.singles.data,
        },
      };
    case cdsActionTypes.FETCH_SINGLES_REJECTED:
      return {
        ...state,
        singles: {
          fetchStatus: FetchStatus.Rejected,
          data: state.singles.data,
        },
      };
    case cdsActionTypes.FETCH_SINGLES_FULFILLED:
      return {
        ...state,
        singles: {
          fetchStatus: FetchStatus.Fulfilled,
          data: action.payload,
        },
      };
    case cdsActionTypes.FETCH_ALBUMS_PENDING:
      return {
        ...state,
        albums: {
          fetchStatus: FetchStatus.Pending,
          data: state.albums.data,
        },
      };
    case cdsActionTypes.FETCH_ALBUMS_REJECTED:
      return {
        ...state,
        albums: {
          fetchStatus: FetchStatus.Rejected,
          data: state.albums.data,
        },
      };
    case cdsActionTypes.FETCH_ALBUMS_FULFILLED:
      return {
        ...state,
        albums: {
          fetchStatus: FetchStatus.Fulfilled,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};
