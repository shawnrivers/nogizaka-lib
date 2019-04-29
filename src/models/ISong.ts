import { SongType, FukujinType } from '../utils/constants';

export type ISong = {
  title: string;
  key: string;
  single: string;
  albums: string[];
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  musicVideo: string;
  type: SongType;
  creators: {
    lyrics: string[];
    compose: string[];
    arrange: string[];
    direct: string[];
  };
  performers: {
    center: string[];
    fukujin: FukujinType | string[];
    solo: string;
    unit: string;
  };
  formations: {
    firstRow: string[];
    secondRow: string[];
    thirdRow: string[];
    fourthRow: string[];
  };
};

export type ISongs = {
  [key: string]: ISong;
};
