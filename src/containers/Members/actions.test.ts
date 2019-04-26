import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import { FetchStatus, JoinedGeneration, BloodType, PositionType } from '../../utils/constants';
import { MemberResponse } from '../../apis/responseTypes';
import { getMembers, MembersActionTypes } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Members Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('getMembers', () => {
    const initialState = {
      members: {
        data: {},
        fetchStatus: FetchStatus.None,
      },
    };

    const store = mockStore(initialState);

    const mockMemberResponse: MemberResponse = {
      name: '',
      nameNotations: {
        firstName: '',
        lastName: '',
        firstNameFurigana: '',
        lastNameFurigana: '',
        firstNameEn: '',
        lastNameEn: '',
      },
      profileImage: {
        large: '',
        small: '',
      },
      singleImages: {
        '1': {
          large: '',
          small: '',
        },
      },
      join: JoinedGeneration.First,
      birthday: '',
      height: 0,
      bloodType: BloodType.A,
      sites: [],
      photoAlbums: [],
      units: [],
      positionsHistory: {
        '1': PositionType.None,
      },
      positionsCounter: {
        center: 0,
        fukujin: 0,
        selected: 0,
        under: 0,
      },
      graduation: {
        isGraduated: false,
        graduatedDate: '',
      },
    };

    describe('When GET succeeded', () => {
      beforeEach(async () => {
        fetchMock.get('https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/members.json', {
          body: [
            {
              ...mockMemberResponse,
              name: 'A',
            },
            {
              ...mockMemberResponse,
              name: 'B',
            },
          ],
          headers: {
            'content-type': 'application/json',
          },
        });

        const getMembersAction = getMembers() as any;
        await store.dispatch(getMembersAction);
      });

      it('It should create FETCH_MEMBERS_FULFILLED after successfully received members data response', () => {
        const [pendingAction, fulfilledAction] = store.getActions();

        expect(pendingAction.type).toBe(MembersActionTypes.FETCH_MEMBERS_PENDING);
        expect(fulfilledAction.type).toBe(MembersActionTypes.FETCH_MEMBERS_FULFILLED);
      });

      it('It should transform the response type from array to object', () => {
        const fulfilledAction = store.getActions()[1];

        expect(fulfilledAction.payload).toStrictEqual({
          A: {
            ...mockMemberResponse,
            name: 'A',
          },
          B: {
            ...mockMemberResponse,
            name: 'B',
          },
        });
      });
    });
  });
});
