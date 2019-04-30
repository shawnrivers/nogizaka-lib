import { SongType, FukujinType, PositionType } from '../utils/constants';
import { ProfileImage } from './IMember';

export type IFormations = {
  firstRow: string[];
  secondRow: string[];
  thirdRow: string[];
  fourthRow: string[];
};

export type IPerformers = {
  center: string[];
  fukujin: FukujinType | string[];
  solo: string;
  unit: string;
};

export type ISong = {
  title: string;
  key: string;
  single: {
    title: string;
    number: string;
  };
  albums: {
    title: string;
    number: string;
  }[];
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
  performers: IPerformers;
  performersTag: {
    name: string;
    singleNumber: string;
  };
  formations: IFormations;
};

export type ISongs = {
  [key: string]: ISong;
};

export type IMemberCard = {
  name: string;
  displayName: string;
  profileImage: ProfileImage;
  position: PositionType;
};

export type IFormationsDisplay = IMemberCard[][];

export type ISongDisplay = {
  title: string;
  key: string;
  single: {
    title: string;
    number: string;
  };
  albums: {
    title: string;
    number: string;
  }[];
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  musicVideo: string;
  type: string;
  creators: {
    lyrics: string[];
    compose: string[];
    arrange: string[];
    direct: string[];
  };
  formations: IFormationsDisplay;
  performersTag: string;
};
