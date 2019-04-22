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
  graduation: {
    isGraduated: boolean;
    graduatedDate: string;
  };
};

export type IMembers = {
  [name: string]: IMember;
};