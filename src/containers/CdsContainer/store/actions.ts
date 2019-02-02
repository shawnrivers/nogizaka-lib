import { CdsCurrentPage } from "../../../utils/constants";
import { cdsActionTypes } from "./actionTypes";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";

export type cdsActions =
  | {
      type: cdsActionTypes.FETCH_SINGLES;
      payload: ISingle[];
    }
  | {
      type: cdsActionTypes.FETCH_ALBUMS;
      payload: IAlbum[];
    }
  | {
      type: cdsActionTypes.SWITCH_CDS_PAGE;
      payload: CdsCurrentPage;
    }
  | {
      type: cdsActionTypes.SHIFT_CDS_PAGE;
    };


// Action Creators

export const shiftCdsPage = (): cdsActions => {
  return {
    type: cdsActionTypes.SHIFT_CDS_PAGE
  };
};

export const switchCdsPage = (page: CdsCurrentPage): cdsActions => {
  return {
    type: cdsActionTypes.SWITCH_CDS_PAGE,
    payload: page
  };
};

export const fetchSingles = () => {
  return (dispatch: any) => {
    fetch(
      "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json"
    )
      .then(response => response.json())
      .then(singles => {
        console.log("fetched data (singles):", singles);
        return dispatch({
          type: cdsActionTypes.FETCH_SINGLES,
          payload: singles
        });
      })
      .catch(error => console.log(error));
  };
};

export const fetchAlbums = () => {
  return (dispatch: any) => {
    fetch(
      "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/albums.json"
    )
      .then(response => response.json())
      .then(albums => {
        console.log("fetched data (albums):", albums);
        return dispatch({
          type: cdsActionTypes.FETCH_ALBUMS,
          payload: albums
        });
      })
      .catch(error => console.log(error));
  };
};
