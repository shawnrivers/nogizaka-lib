import { cdsActions } from "./actions";
import { cdsActionTypes } from "./actionTypes";
import { CdsCurrentPage } from "../../../utils/constants";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";

type ICdsState = {
  singles: ISingle[];
  albums: IAlbum[];
  currentPage: CdsCurrentPage;
};

const initialCdsState: ICdsState = {
  singles: [],
  albums: [],
  currentPage: CdsCurrentPage.Single
};

export const cdsReducer = (
  state: ICdsState = initialCdsState,
  action: cdsActions
) => {
  switch (action.type) {
    case cdsActionTypes.FETCH_SINGLES:
      return {
        ...state,
        singles: action.payload
          .slice()
          .sort((itemA: ISingle, itemB: ISingle) => itemB.number - itemA.number)
      };
    case cdsActionTypes.FETCH_ALBUMS:
      return {
        ...state,
        albums: action.payload
          .slice()
          .sort((itemA: IAlbum, itemB: IAlbum) => itemB.number - itemA.number)
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
