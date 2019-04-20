import { IMembers } from '../../../models/IMember';
import { Dispatch } from 'redux';
import { fetchMembers } from '../../../apis/MembersAPI';

export enum MembersActionTypes {
  FETCH_MEMBERS_PENDING = '@nogizaka-lib/cds/FETCH_MEMBERS_PENDING',
  FETCH_MEMBERS_REJECTED = '@nogizaka-lib/cds/FETCH_MEMBERS_REJECTED',
  FETCH_MEMBERS_FULFILLED = '@nogizaka-lib/cds/FETCH_MEMBERS_FULFILLED',
}

export type MembersActions =
  | {
      type: MembersActionTypes.FETCH_MEMBERS_PENDING;
    }
  | {
      type: MembersActionTypes.FETCH_MEMBERS_REJECTED;
    }
  | {
      type: MembersActionTypes.FETCH_MEMBERS_FULFILLED;
      payload: IMembers;
    };

export const getMembers = () => async (dispatch: Dispatch<MembersActions>): Promise<void> => {
  dispatch({ type: MembersActionTypes.FETCH_MEMBERS_PENDING });

  try {
    const members = await fetchMembers();

    const normalizedMembers = members.reduce((acc: IMembers, curr) => {
      acc[curr.name] = curr;
      return acc;
    }, {});

    dispatch({
      type: MembersActionTypes.FETCH_MEMBERS_FULFILLED,
      payload: normalizedMembers,
    });
  } catch (err) {
    dispatch({ type: MembersActionTypes.FETCH_MEMBERS_REJECTED });
    console.log(err);
  }
};
