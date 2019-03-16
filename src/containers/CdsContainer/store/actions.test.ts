import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { FetchStatus } from '../../../utils/constants';
import { fetchSingles, fetchAlbums } from './actions';
import { cdsActionTypes } from './actionTypes';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('cd actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetchSingles', () => {
    const initialState = {
      cds: {
        singles: {
          fetchStatus: FetchStatus.None,
          data: [],
        },
      },
    };

    const store = mockStore(initialState);

    beforeEach(async () => {
      fetchMock.getOnce('https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json', {
        body: [
          {
            number: 1,
            title: 'title1',
          },
          {
            number: 2,
            title: 'title2',
          },
        ],
        headers: {
          'content-type': 'applicatopn/json',
        },
      });

      const fetchSinglesAction = fetchSingles() as any;

      await store.dispatch(fetchSinglesAction);
    });

    it('should create FETCH_SINGLES_FULFILLED after sucessfully received singles data response', () => {
      const pendingAction = store.getActions()[0];
      const fulfilledAction = store.getActions()[1];

      expect(pendingAction.type).toBe(cdsActionTypes.FETCH_SINGLES_PENDING);
      expect(fulfilledAction.type).toBe(cdsActionTypes.FETCH_SINGLES_FULFILLED);
    });

    it('should sort singles data in descending order', () => {
      const fulfilledAction = store.getActions()[1];
      expect(fulfilledAction.payload).toStrictEqual([
        {
          number: 2,
          title: 'title2',
        },
        {
          number: 1,
          title: 'title1',
        },
      ]);
    });
  });

  describe('fetchAlbums', () => {
    const initialState = {
      cds: {
        albums: {
          fetchStatus: FetchStatus.None,
          data: [],
        },
      },
    };

    const store = mockStore(initialState);

    beforeEach(async () => {
      fetchMock.getOnce('https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/albums.json', {
        body: [
          {
            number: 1,
            title: 'title1',
          },
          {
            number: 2,
            title: 'title2',
          },
        ],
        headers: {
          'content-type': 'applicatopn/json',
        },
      });

      const fetchAlbumsAction = fetchAlbums() as any;

      await store.dispatch(fetchAlbumsAction);
    });

    it('should create FETCH_ALBUMS_FULFILLED after sucessfully received albums data response', () => {
      const pendingAction = store.getActions()[0];
      const fulfilledAction = store.getActions()[1];

      expect(pendingAction.type).toBe(cdsActionTypes.FETCH_ALBUMS_PENDING);
      expect(fulfilledAction.type).toBe(cdsActionTypes.FETCH_ALBUMS_FULFILLED);
    });

    it('should sort albums data in descending order', () => {
      const fulfilledAction = store.getActions()[1];
      expect(fulfilledAction.payload).toStrictEqual([
        {
          number: 2,
          title: 'title2',
        },
        {
          number: 1,
          title: 'title1',
        },
      ]);
    });
  });
});
