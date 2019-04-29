import { IRootState } from '../../stores/state';
import { IMembers, IMember, IMemberDisplay, ProfileImage } from '../../models/IMember';
import { FetchStatus, JoinedGeneration, UnitType } from '../../utils/constants';
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

export const selectMemberByName = (state: IRootState, name: string): IMember => selectMembers(state)[name];

const convertSingleImagesForDisplay = (singleImages: { [singleNumber: string]: ProfileImage }): ProfileImage[] => {
  const list = Object.values(singleImages)
    .reverse()
    .filter(value => value.large !== '');

  let noDuplicateList: ProfileImage[] = [];

  for (const item of list) {
    let isSeen = false;

    for (const seenItem of noDuplicateList) {
      if (seenItem.large === item.large) {
        isSeen = true;
        break;
      }
    }

    if (!isSeen) {
      noDuplicateList.push(item);
    }
  }

  return noDuplicateList;
};

const convertJoinForDisplay = (join: JoinedGeneration, isGraduated: boolean): string => {
  let convertedJoin = '';

  switch (join) {
    case JoinedGeneration.First:
      convertedJoin = '1期生';
      break;
    case JoinedGeneration.Second:
      convertedJoin = '2期生';
      break;
    case JoinedGeneration.Third:
      convertedJoin = '3期生';
      break;
    case JoinedGeneration.Fourth:
      convertedJoin = '4期生';
      break;
    case JoinedGeneration.Exchange:
      convertedJoin = '交換留学生';
      break;
    default:
      break;
  }

  return isGraduated ? convertedJoin + ' (卒業)' : convertedJoin;
};

const convertUnitsForDisplay = (
  broadUnits: {
    name: string;
    type: UnitType;
  }[],
): {
  units: string[];
  corps: string[];
} => {
  let units: string[] = [];
  let corps: string[] = [];

  for (const boardUnit of broadUnits) {
    if (boardUnit.type === UnitType.Unit) {
      units.push(boardUnit.name);
    } else {
      corps.push(boardUnit.name);
    }
  }

  return {
    units,
    corps,
  };
};

export const selectMemberByNameForDisplay = (state: IRootState, name: string): IMemberDisplay | undefined => {
  const member = selectMembers(state)[name];

  if (member !== undefined) {
    const { units, corps } = convertUnitsForDisplay(member.units);

    return {
      name: member.name,
      nameNotations: member.nameNotations,
      mainImage: member.profileImage,
      profileImages: convertSingleImagesForDisplay(member.singleImages),
      join: convertJoinForDisplay(member.join, member.isGraduated),
      birthday: member.birthday,
      height: member.height,
      bloodType: member.bloodType,
      sites: member.sites,
      photoAlbums: member.photoAlbums,
      units,
      corps,
      positionsHistory: member.positionsHistory,
      positionsCounter: member.positionsCounter,
    };
  }

  return undefined;
};
