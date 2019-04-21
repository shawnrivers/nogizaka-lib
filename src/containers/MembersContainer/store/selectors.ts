import { IRootState } from '../../../stores/state';
import { IMembers, IMember } from '../../../models/IMember';
import { FetchStatus, JoinedGeneration } from '../../../utils/constants';
import { MembersByType } from '../../../components/organisms/MemberCardList';

export const selectMembers = (state: IRootState): IMembers => state.members.members;

export const selectMemberArray = (state: IRootState): IMember[] => Object.values(state.members.members);

export const selectMembersFetchStatus = (state: IRootState): FetchStatus => state.members.fetchStatus;

export const selectFirstGeneration = (state: IRootState): IMember[] => {
  const members = selectMemberArray(state);

  return members.filter(member => member.join === JoinedGeneration.First && !member.graduation.isGraduated);
};

export const selectSecondGeneration = (state: IRootState): IMember[] => {
  const members = selectMemberArray(state);

  return members.filter(member => member.join === JoinedGeneration.Second && !member.graduation.isGraduated);
};

export const selectThirdGeneration = (state: IRootState): IMember[] => {
  const members = selectMemberArray(state);

  return members.filter(member => member.join === JoinedGeneration.Third && !member.graduation.isGraduated);
};

export const selectFourthGeneration = (state: IRootState): IMember[] => {
  const members = selectMemberArray(state);

  return members.filter(member => member.join === JoinedGeneration.Fourth && !member.graduation.isGraduated);
};

export const selectGraduates = (state: IRootState): IMember[] => {
  const members = selectMemberArray(state);

  return members
    .filter(member => member.graduation.isGraduated)
    .sort(
      (memberA, memberB) =>
        new Date(memberB.graduation.graduatedDate).getTime() - new Date(memberA.graduation.graduatedDate).getTime(),
    );
};
