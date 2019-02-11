import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { CdsCurrentPage, FetchStatus } from "../../../utils/constants";
import { switchCdsPage, fetchSingles, fetchAlbums } from "./actions";
import { cdsActionTypes } from "./actionTypes";
import fetchMock from "fetch-mock";
import { AnyAction } from "redux";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("cd actions", () => {
  describe("synchronous actions", () => {
    it("should create an action to switch current page", () => {
      const payload = CdsCurrentPage.Single;
      expect(switchCdsPage(payload)).toStrictEqual({
        type: cdsActionTypes.SWITCH_CDS_PAGE,
        payload
      });
    });
  });

  describe("async actions", () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it("should create FETCH_SINGLES_FULFILLED after sucessfully received singles data response", () => {
      fetchMock.getOnce(
        "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json",
        {
          body: [
            {
              number: 1,
              title: "title1"
            }
          ],
          headers: {
            "content-type": "applicatopn/json"
          }
        }
      );

      const initialState = {
        cds: {
          singles: {
            fetchStatus: FetchStatus.None,
            data: []
          }
        }
      };
      
      const store = mockStore(initialState);

      store.dispatch(fetchSingles() as any).then(() => {
        expect(store.getActions()).toStrictEqual([
          {
            type: cdsActionTypes.FETCH_SINGLES_PENDING
          },
          {
            type: cdsActionTypes.FETCH_SINGLES_FULFILLED,
            payload: [
              {
                number: 1,
                title: "title1"
              }
            ]
          }
        ]);
      });
    });

    it("should create FETCH_ALBUMS_FULFILLED after sucessfully received albums data response", () => {
      fetchMock.getOnce(
        "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/albums.json",
        {
          body: [
            {
              number: 1,
              title: "title1"
            }
          ],
          headers: {
            "content-type": "applicatopn/json"
          }
        }
      );
  
      const initialState = {
        cds: {
          albums: {
            fetchStatus: FetchStatus.None,
            data: []
          }
        }
      };
  
      const store = mockStore(initialState);
  
      store.dispatch(fetchAlbums() as any).then(() => {
        expect(store.getActions()).toStrictEqual([
          {
            type: cdsActionTypes.FETCH_ALBUMS_PENDING
          },
          {
            type: cdsActionTypes.FETCH_ALBUMS_FULFILLED,
            payload: [
              {
                number: 1,
                title: "title1"
              }
            ]
          }
        ]);
      });
    });
  });

});