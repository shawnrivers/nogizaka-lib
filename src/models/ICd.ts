import { ISite } from './ISite';
import { CdType, SongType, FocusPerformersType } from '../utils/constants';

export type ICdArtworks = {
  type: CdType;
  urls: {
    large: string;
    medium: string;
    small: string;
  };
};

export type ICdSong = {
  number: number;
  title: string;
  inCdType: CdType[];
  type: SongType;
  artwork: string;
  focusPerformers: IFocusPerformers;
};

type IFocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};

export type ICd = {
  title: string;
  number: number;
  release: string;
  artworks: ICdArtworks[];
  shopping: ISite[];
  songs: ICdSong[];
};
