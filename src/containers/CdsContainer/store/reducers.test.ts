import { cdsReducer } from './reducers';
import { FetchStatus } from '../../../utils/constants';
import { cdsActions } from './actions';
import { cdsActionTypes } from './actionTypes';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';

describe('cd reducers', () => {
  it('should return the initial state', () => {
    const mockInitialState = {
      singles: {
        fetchStatus: FetchStatus.None,
        data: [],
      },
      albums: {
        fetchStatus: FetchStatus.None,
        data: [],
      },
    };

    expect(cdsReducer(undefined, {} as any)).toStrictEqual(mockInitialState);
  });
});
