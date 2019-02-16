import { cdsReducer } from "./reducers";
import { FetchStatus, CdsCurrentPage } from "../../../utils/constants";
import { cdsActions } from "./actions";
import { cdsActionTypes } from "./actionTypes";
import { ISingle } from "../../../models/ISingle";
import { IAlbum } from "../../../models/IAlbum";

describe("cd reducers", () => {
  it("should return the initial state", () => {
    const mockInitialState = {
      singles: {
        fetchStatus: FetchStatus.None,
        data: []
      },
      albums: {
        fetchStatus: FetchStatus.None,
        data: []
      }
    };

    expect(cdsReducer(undefined, {} as cdsActions)).toStrictEqual(
      mockInitialState
    );
  });

  it("should sort singles in descending order", () => {
    const mockInitialState = {
      singles: {
        fetchStatus: FetchStatus.None,
        data: []
      },
      albums: {
        fetchStatus: FetchStatus.None,
        data: []
      }
    };

    const mockAction: cdsActions = {
      type: cdsActionTypes.FETCH_SINGLES_FULFILLED,
      payload: [
        {
          number: 1,
          title: "title1"
        },
        {
          number: 2,
          title: "title12"
        }
      ] as ISingle[]
    };

    expect(
      cdsReducer(mockInitialState, mockAction)
    ).toStrictEqual({
      ...mockInitialState,
      singles: {
        fetchStatus: FetchStatus.Fulfilled,
        data: [
          {
            number: 2,
            title: "title12"
          },
          {
            number: 1,
            title: "title1"
          }
        ]
      }
    });
  });

  it("should sort albums in descending order", () => {
    const mockInitialState = {
      singles: {
        fetchStatus: FetchStatus.None,
        data: []
      },
      albums: {
        fetchStatus: FetchStatus.None,
        data: []
      }
    };

    const mockAction: cdsActions = {
      type: cdsActionTypes.FETCH_ALBUMS_FULFILLED,
      payload: [
        {
          number: 1,
          title: "title1"
        },
        {
          number: 2,
          title: "title12"
        }
      ] as IAlbum[]
    };

    expect(
      cdsReducer(mockInitialState, mockAction)
    ).toStrictEqual({
      ...mockInitialState,
      albums: {
        fetchStatus: FetchStatus.Fulfilled,
        data: [
          {
            number: 2,
            title: "title12"
          },
          {
            number: 1,
            title: "title1"
          }
        ]
      }
    });
  });
});
