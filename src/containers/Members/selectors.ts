import { IRootState } from '../../stores/state';
import { IMembers, IMember, IMemberDisplay, ProfileImage } from '../../models/IMember';
import { FetchStatus, JoinedGeneration, UnitType, PositionType } from '../../utils/constants';
import { sortByDate } from '../../utils/arrays';
import { convertJoinForDisplay } from '../../utils/strings';

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

const convertPositionHistoryForDisplay = (positionsHistory: {
  [singleNumber: string]: PositionType;
}): {
  singleNumber: number;
  position: PositionType;
}[] => {
  let historyList: {
    singleNumber: number;
    position: PositionType;
  }[] = [];

  const numbers = Object.keys(positionsHistory);
  const positions = Object.values(positionsHistory);

  for (let i = 0; i < numbers.length; i++) {
    historyList.push({
      singleNumber: Number(numbers[i]),
      position: positions[i],
    });
  }

  const filteredHistory = historyList.filter(history => history.position !== PositionType.None);

  return filteredHistory;
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
      positionsHistory: convertPositionHistoryForDisplay(member.positionsHistory),
      positionsCounter: member.positionsCounter,
    };
  }

  return undefined;
};
