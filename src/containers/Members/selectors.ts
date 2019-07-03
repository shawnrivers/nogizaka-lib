import { IRootState } from '../../stores/state';
import { IMembers, IMember, IMemberDisplay, ProfileImage } from '../../models/IMember';
import {
  FetchStatus,
  JoinedGeneration,
  UnitType,
  PositionType,
  GlowStickColors,
  GlowStickColorType,
  GlowStickColorsLight,
  BloodType,
} from '../../utils/constants';
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

const convertGlowStickColorNormal = (color: string): GlowStickColors => {
  switch (color) {
    case GlowStickColorType.Red:
      return GlowStickColors.Red;
    case GlowStickColorType.Yellow:
      return GlowStickColors.Yellow;
    case GlowStickColorType.White:
      return GlowStickColors.White;
    case GlowStickColorType.Blue:
      return GlowStickColors.Blue;
    case GlowStickColorType.Green:
      return GlowStickColors.Green;
    case GlowStickColorType.Purple:
      return GlowStickColors.Purple;
    case GlowStickColorType.Black:
      return GlowStickColors.Black;
    case GlowStickColorType.Pink:
      return GlowStickColors.Pink;
    case GlowStickColorType.Orange:
      return GlowStickColors.Orange;
    case GlowStickColorType.LightBlue:
      return GlowStickColors.LightBlue;
    case GlowStickColorType.YellowGreen:
      return GlowStickColors.YellowGreen;
    case GlowStickColorType.None:
      return GlowStickColors.None;
    default:
      return GlowStickColors.None;
  }
};

const convertGlowStickColorLight = (color: string): GlowStickColorsLight => {
  switch (color) {
    case GlowStickColorType.Red:
      return GlowStickColorsLight.Red;
    case GlowStickColorType.Yellow:
      return GlowStickColorsLight.Yellow;
    case GlowStickColorType.White:
      return GlowStickColorsLight.White;
    case GlowStickColorType.Blue:
      return GlowStickColorsLight.Blue;
    case GlowStickColorType.Green:
      return GlowStickColorsLight.Green;
    case GlowStickColorType.Purple:
      return GlowStickColorsLight.Purple;
    case GlowStickColorType.Black:
      return GlowStickColorsLight.Black;
    case GlowStickColorType.Pink:
      return GlowStickColorsLight.Pink;
    case GlowStickColorType.Orange:
      return GlowStickColorsLight.Orange;
    case GlowStickColorType.LightBlue:
      return GlowStickColorsLight.LightBlue;
    case GlowStickColorType.YellowGreen:
      return GlowStickColorsLight.YellowGreen;
    case GlowStickColorType.None:
      return GlowStickColorsLight.None;
    default:
      return GlowStickColorsLight.None;
  }
};

const convertGlowStickColors = (colors: {
  left: string;
  right: string;
}): {
  left: GlowStickColors | GlowStickColorsLight;
  right: GlowStickColors | GlowStickColorsLight;
} => ({
  left: convertGlowStickColorNormal(colors.left),
  right:
    colors.left !== colors.right ? convertGlowStickColorNormal(colors.right) : convertGlowStickColorLight(colors.right),
});

const convertBloodType = (bloodType: BloodType): string => (bloodType === BloodType.Unknown ? '不明' : bloodType);

export const convertMemberForDisplay = (member: IMember): IMemberDisplay | undefined => {
  if (member) {
    const { units, corps } = convertUnitsForDisplay(member.units);

    return {
      name: member.name,
      nameNotations: member.nameNotations,
      glowStickColor: convertGlowStickColors(member.glowStickColor),
      mainImage: member.profileImage,
      profileImages: convertSingleImagesForDisplay(member.singleImages),
      join: convertJoinForDisplay(member.join, member.isGraduated),
      birthday: member.birthday,
      height: member.height,
      bloodType: convertBloodType(member.bloodType),
      origin: member.origin,
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
