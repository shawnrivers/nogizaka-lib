import { ISongs } from '../../models/ISong';
import { FetchStatus } from '../../utils/constants';
import { SongsActions, SongsActionTypes } from './actions';

export type ISongsState = {
  data: ISongs;
  fetchStatus: FetchStatus;
};

const initialSongsState: ISongsState = {
  data: {},
  fetchStatus: FetchStatus.None,
};

export const SongsReducers = (state: ISongsState = initialSongsState, action: SongsActions): ISongsState => {
  switch (action.type) {
    case SongsActionTypes.FETCH_SONGS_PENDING:
      return {
        ...state,
        fetchStatus: FetchStatus.Pending,
      };
    case SongsActionTypes.FETCH_SONGS_REJECTED:
      return {
        ...state,
        fetchStatus: FetchStatus.Rejected,
      };
    case SongsActionTypes.FETCH_SONGS_FULFILLED:
      return {
        data: action.payload,
        fetchStatus: FetchStatus.Pending,
      };
    default:
      return state;
  }
};
