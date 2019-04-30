import { JoinedGeneration, BloodType, PhotoAlbumType, UnitType, PositionType } from '../utils/constants';
import { ISite } from './ISite';

export type ProfileImage = {
  large: string;
  small: string;
};

export type IMember = {
  name: string;
  nameNotations: {
    firstName: string;
    lastName: string;
    firstNameFurigana: string;
    lastNameFurigana: string;
    firstNameEn: string;
    lastNameEn: string;
  };
  glowStickColor: {
    left: string;
    right: string;
  };
  profileImage: ProfileImage;
  singleImages: {
    [singleNumber: string]: ProfileImage;
  };
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: BloodType;
  sites: ISite[];
  photoAlbums: {
    title: string;
    release: string;
    type: PhotoAlbumType;
    shopping: ISite[];
  }[];
  units: {
    name: string;
    type: UnitType;
  }[];
  positionsHistory: {
    [singleNumber: string]: PositionType;
  };
  positionsCounter: {
    center: number;
    fukujin: number;
    selected: number;
    under: number;
  };
  isGraduated: boolean;
  graduatedDate: string;
};

export type IMembers = {
  [name: string]: IMember;
};

export type IMemberDisplay = {
  name: string;
  nameNotations: {
    firstName: string;
    lastName: string;
    firstNameFurigana: string;
    lastNameFurigana: string;
    firstNameEn: string;
    lastNameEn: string;
  };
  glowStickColor: {
    left: string;
    right: string;
  };
  mainImage: ProfileImage;
  profileImages: ProfileImage[];
  join: string;
  birthday: string;
  height: number;
  bloodType: BloodType;
  sites: ISite[];
  photoAlbums: {
    title: string;
    release: string;
    type: PhotoAlbumType;
    shopping: ISite[];
  }[];
  units: string[];
  corps: string[];
  positionsHistory: {
    singleNumber: number;
    position: PositionType;
  }[];
  positionsCounter: {
    center: number;
    fukujin: number;
    selected: number;
    under: number;
  };
};
