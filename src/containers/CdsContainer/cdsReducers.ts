import { CdsActions } from "./cdsActions";

const initialState = {
  singles: [],
  albums: []
};

export const CdReducer = (
  state: any = initialState,
  action: CdsActions.Action
) => {
  switch (action.type) {
    case CdsActions.Type.FETCH_SINGLES:
      return {
        ...state,
        singles: action.payload
      };
    case CdsActions.Type.FETCH_ALBUMS:
      return {
        ...state,
        albums: action.payload
      };
    default:
      return state;
  }
};
