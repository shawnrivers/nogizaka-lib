import { SongType, DisplaySongType, FocusPerformersType } from './constants';
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
