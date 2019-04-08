import { CdsReducer } from './reducers';
import { FetchStatus } from '../../../utils/constants';

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

    expect(CdsReducer(undefined, {} as any)).toStrictEqual(mockInitialState);
  });
});
