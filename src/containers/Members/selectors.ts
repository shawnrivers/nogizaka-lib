import { IRootState } from '../../stores/state';
import { IMembers, IMember } from '../../models/IMember';
import { FetchStatus, JoinedGeneration } from '../../utils/constants';
import { sortByDate } from '../../utils/arrays';

export const selectMembers = (state: IRootState): IMembers => state.members.data;

export const selectMemberArray = (state: IRootState): IMember[] => Object.values(selectMembers(state));

export const selectMembersFetchStatus = (state: IRootState): FetchStatus => state.members.fetchStatus;

export const selectFirstGeneration = (state: IRootState): IMember[] =>
  selectMemberArray(state).filter(member => member.join === JoinedGeneration.First && !member.isGraduated);

export const selectSecondGeneration = (state: IRootState): IMember[] =>
  selectMemberArray(state).filter(member => member.join === JoinedGeneration.Second && !member.isGraduated);

export const selectThirdGeneration = (state: IRootState): IMember[] =>
  selectMemberArray(state).filter(member => member.join === JoinedGeneration.Third && !member.isGraduated);

export const selectFourthGeneration = (state: IRootState): IMember[] =>
  selectMemberArray(state).filter(member => member.join === JoinedGeneration.Fourth && !member.isGraduated);

export const selectGraduates = (state: IRootState): IMember[] =>
  sortByDate(selectMemberArray(state).filter(member => member.isGraduated), 'graduatedDate', 'desc');
