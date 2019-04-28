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

export const convertSongType = (type: SongType): DisplaySongType => {
  switch (type) {
    case SongType.None:
      return DisplaySongType.None;
    case SongType.Title:
      return DisplaySongType.Title;
    case SongType.Coupling:
      return DisplaySongType.Coupling;
    case SongType.Lead:
      return DisplaySongType.Lead;
    case SongType.Special:
      return DisplaySongType.Special;
    case SongType.Under:
      return DisplaySongType.Under;
    case SongType.Unit:
      return DisplaySongType.Unit;
    case SongType.Solo:
      return DisplaySongType.Solo;
    case SongType.FirstGeneration:
      return DisplaySongType.FirstGeneration;
    case SongType.SecondGeneration:
      return DisplaySongType.SecondGeneration;
    case SongType.ThirdGeneration:
      return DisplaySongType.ThirdGeneration;
    case SongType.FourthGeneration:
      return DisplaySongType.FourthGeneration;
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
