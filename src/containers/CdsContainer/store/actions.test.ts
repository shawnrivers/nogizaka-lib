import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { FetchStatus } from '../../../utils/constants';
import { CdsActionTypes, getSingles, getAlbums } from './actions';
import fetchMock from 'fetch-mock';
import { SingleResponse, AlbumResponse } from '../../../apis/responseTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('cd actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('getSingles', () => {
    const initialState = {
      cds: {
        singles: {
          fetchStatus: FetchStatus.None,
          data: [],
        },
      },
    };

    const store = mockStore(initialState);

    const mockSingleData: SingleResponse = {
      number: '',
      title: '',
      release: '',
      artworks: [],
      shopping: [],
      songs: [],
      behindPerformers: {
        trainees: [],
        skips: [],
      },
    };

    beforeEach(async () => {
      fetchMock.getOnce('https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json', {
        body: [
          {
            ...mockSingleData,
            number: '1',
            title: 'title1',
            release: '2018-10-01',
          },
          {
            ...mockSingleData,
            number: '2',
            title: 'title2',
            release: '2019-01-01',
          },
        ],
        headers: {
          'content-type': 'application/json',
        },
      });

      const fetchSinglesAction = getSingles() as any;

      await store.dispatch(fetchSinglesAction);
    });

    it('should create FETCH_SINGLES_FULFILLED after successfully received singles data response', () => {
      const [pendingAction, fulfilledAction] = store.getActions();

      expect(pendingAction.type).toBe(CdsActionTypes.FETCH_SINGLES_PENDING);
      expect(fulfilledAction.type).toBe(CdsActionTypes.FETCH_SINGLES_FULFILLED);
    });

    it('should sort singles data in descending order of release data', () => {
      const fulfilledAction = store.getActions()[1];
      expect(fulfilledAction.payload).toStrictEqual([
        {
          ...mockSingleData,
          number: '2',
          title: 'title2',
          release: '2019-01-01',
        },
        {
          ...mockSingleData,
          number: '1',
          title: 'title1',
          release: '2018-10-01',
        },
      ]);
    });
  });

  describe('getAlbums', () => {
    const initialState = {
      cds: {
        albums: {
          fetchStatus: FetchStatus.None,
          data: [],
        },
      },
    };

    const store = mockStore(initialState);

    const mockAlbumData: AlbumResponse = {
      number: '',
      title: '',
      release: '',
      artworks: [],
      shopping: [],
      songs: [],
    };

    beforeEach(async () => {
      fetchMock.getOnce('https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/albums.json', {
        body: [
          {
            ...mockAlbumData,
            number: '1',
            title: 'title1',
            release: '2018-10-01',
          },
          {
            ...mockAlbumData,
            number: '2',
            title: 'title2',
            release: '2019-01-01',
          },
        ],
        headers: {
          'content-type': 'application/json',
        },
      });

      const fetchAlbumsAction = getAlbums() as any;

      await store.dispatch(fetchAlbumsAction);
    });

    it('should create FETCH_ALBUMS_FULFILLED after successfully received albums data response', () => {
      const [pendingAction, fulfilledAction] = store.getActions();

      expect(pendingAction.type).toBe(CdsActionTypes.FETCH_ALBUMS_PENDING);
      expect(fulfilledAction.type).toBe(CdsActionTypes.FETCH_ALBUMS_FULFILLED);
    });

    it('should sort albums data in descending order of release date', () => {
      const fulfilledAction = store.getActions()[1];
      expect(fulfilledAction.payload).toStrictEqual([
        {
          ...mockAlbumData,
          number: '2',
          title: 'title2',
          release: '2019-01-01',
        },
        {
          ...mockAlbumData,
          number: '1',
          title: 'title1',
          release: '2018-10-01',
        },
      ]);
    });
  });
});
