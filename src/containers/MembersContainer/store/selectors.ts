import { IRootState } from '../../../stores/state';
import { IMembers } from '../../../models/IMember';
import { FetchStatus, JoinedGeneration } from '../../../utils/constants';
import { MembersByType } from '../../../components/organisms/MemberCardList';

export const selectMembers = (state: IRootState): IMembers => state.members.members;

export const selectMembersFetchStatus = (state: IRootState): FetchStatus => state.members.fetchStatus;

export const selectMembersByType = (state: IRootState): MembersByType => {
  const members = selectMembers(state);

  let memberListByType: MembersByType = {
    first: [],
    second: [],
    third: [],
    fourth: [],
    graduate: [],
  };

  for (const key of Object.keys(members)) {
    const member = members[key];

    if (member.graduation.isGraduated) {
      memberListByType.graduate.push(member);
    } else {
      switch (member.join) {
        case JoinedGeneration.First:
          memberListByType.first.push(member);
          break;
        case JoinedGeneration.Second:
          memberListByType.second.push(member);
          break;
        case JoinedGeneration.Third:
          memberListByType.third.push(member);
          break;
        case JoinedGeneration.Fourth:
          memberListByType.fourth.push(member);
          break;
        default:
          break;
      }
    }
  }

  return memberListByType;
};
