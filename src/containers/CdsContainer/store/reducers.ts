import { cdsActions } from "./actions";
import { cdsActionTypes } from "./actionTypes";
import { CdsCurrentPage, FetchStatus } from "../../../utils/constants";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";

export type ICdsState = {
  singles: {
    fetchStatus: FetchStatus;
    data: ISingle[];
  };
  albums: {
    fetchStatus: FetchStatus;
    data: IAlbum[];
  };
  currentPage: CdsCurrentPage;
};

export const initialCdsState: ICdsState = {
  singles: {
    fetchStatus: FetchStatus.None,
    data: []
  },
  albums: {
    fetchStatus: FetchStatus.None,
    data: []
  },
  currentPage: CdsCurrentPage.Single
};

export const cdsReducer = (
  state: ICdsState = initialCdsState,
  action: cdsActions
) => {
  switch (action.type) {
    case cdsActionTypes.FETCH_SINGLES_PENDING:
      return {
        ...state,
        singles: {
          fetchStatus: FetchStatus.Pending,
          data: state.singles.data
        }
      };
    case cdsActionTypes.FETCH_SINGLES_REJECTED:
      return {
        ...state,
        singles: {
          fetchStatus: FetchStatus.Rejected,
          data: state.singles.data
        }
      };
    case cdsActionTypes.FETCH_SINGLES_FULFILLED:
      return {
        ...state,
        singles: {
          fetchStatus: FetchStatus.Fulfilled,
          data: action.payload.slice().sort((itemA: ISingle, itemB: ISingle) => itemB.number - itemA.number)
        }
      };
    case cdsActionTypes.FETCH_ALBUMS_PENDING:
      return {
        ...state,
        albums: {
          fetchStatus: FetchStatus.Pending,
          data: state.albums.data
        }
      };
    case cdsActionTypes.FETCH_ALBUMS_REJECTED:
      return {
        ...state,
        albums: {
          fetchStatus: FetchStatus.Rejected,
          data: state.albums.data
        }
      };
    case cdsActionTypes.FETCH_ALBUMS_FULFILLED:
      return {
        ...state,
        albums: {
          fetchStatus: FetchStatus.Fulfilled,
          data: action.payload.slice().sort((itemA: IAlbum, itemB: IAlbum) => itemB.number - itemA.number)
        }
      };
    case cdsActionTypes.SWITCH_CDS_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case cdsActionTypes.SHIFT_CDS_PAGE:
      return {
        ...state,
        currentPage:
          state.currentPage === CdsCurrentPage.Single
            ? CdsCurrentPage.Album
            : CdsCurrentPage.Single
      };
    default:
      return state;
  }
};
