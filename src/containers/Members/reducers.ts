import { IMembers } from 'models/IMember';
import { FetchStatus } from 'utils/constants';
import { MembersActions, MembersActionTypes } from './actions';

export type IMembersState = {
  data: IMembers;
  fetchStatus: FetchStatus;
};

const initialMembersState: IMembersState = {
  data: {},
  fetchStatus: FetchStatus.None,
};

export const MembersReducers = (state: IMembersState = initialMembersState, action: MembersActions): IMembersState => {
  switch (action.type) {
    case MembersActionTypes.FETCH_MEMBERS_PENDING:
      return {
        ...state,
        fetchStatus: FetchStatus.Pending,
      };
    case MembersActionTypes.FETCH_MEMBERS_REJECTED:
      return {
        ...state,
        fetchStatus: FetchStatus.Rejected,
      };
    case MembersActionTypes.FETCH_MEMBERS_FULFILLED:
      return {
        data: action.payload,
        fetchStatus: FetchStatus.Fulfilled,
      };
    default:
      return state;
  }
};
