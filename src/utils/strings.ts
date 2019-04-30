import { SongType, FocusPerformersType, JoinedGeneration } from './constants';
import { IFocusPerformers } from '../models/ICd';

export const toOrdinalNumber = (num: number) => {
  const remainderByTen = num % 10;
  const remainderByHundred = num % 100;
  if (remainderByTen === 1 && remainderByHundred !== 11) {
    return num + 'st';
  }
  if (remainderByTen === 2 && remainderByHundred !== 12) {
    return num + 'nd';
  }
  if (remainderByTen === 3 && remainderByHundred !== 13) {
    return num + 'rd';
  } else {
    return num + 'th';
  }
};

export const convertSongType = (type: SongType): string => {
  switch (type) {
    case SongType.None:
      return '';
    case SongType.Title:
      return '表題曲';
    case SongType.Coupling:
      return 'Coupling';
    case SongType.Lead:
      return 'Lead';
    case SongType.Special:
      return 'Special';
    case SongType.Under:
      return 'Under';
    case SongType.Unit:
      return 'Unit';
    case SongType.Solo:
      return 'Solo';
    case SongType.FirstGeneration:
      return '1期生';
    case SongType.SecondGeneration:
      return '2期生';
    case SongType.ThirdGeneration:
      return '3期生';
    case SongType.FourthGeneration:
      return '3期生';
  }
};

export const getFocusPerformersText = (focusPerformers: IFocusPerformers): string => {
  if (focusPerformers.name.length > 0) {
    return focusPerformers.type === FocusPerformersType.Center
      ? 'C: ' + focusPerformers.name.reduce((acc, curr) => acc + ', ' + curr)
      : focusPerformers.name.reduce((acc, curr) => acc + ', ' + curr);
  } else {
    return '';
  }
};

export const convertJoinForDisplay = (join: JoinedGeneration, isGraduated: boolean): string => {
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

export const convertInCd = (cdNumber: string): string => {
  if (cdNumber === 'U') {
    return 'Under';
  }

  return toOrdinalNumber(Number(cdNumber)) + '.';
};

// Workaround: Hard coding for corresponding single in album under.
// TODO: Generate performers tag in songs.json from server side.
export const convertAlbumNumbersToSingleNumber = (
  albums: {
    title: string;
    number: string;
  }[],
): string => {
  switch (albums[0].number) {
    case '1':
      return '10';
    case '2':
      return '14';
    case '3':
      return '17';
    case 'U':
      return '19';
    case '4':
      return '22';
    default:
      return '23';
  }
};
