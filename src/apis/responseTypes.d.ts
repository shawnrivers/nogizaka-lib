import {
  CdType,
  FocusPerformersType,
  SongType,
  BloodType,
  PhotoAlbumType,
  UnitType,
  JoinedGeneration,
} from '../utils/constants';

type SiteResponse = {
  title: string;
  url: string;
};

type CdResponse = {
  title: string;
  number: string;
  release: string;
  artworks: {
    type: CdType;
    urls: {
      large: string;
      medium: string;
      small: string;
    };
  }[];
  shopping: SiteResponse[];
  songs: {
    number: number;
    title: string;
    inCdType: CdType[];
    type: SongType;
    artwork: string;
    focusPerformers: {
      type: FocusPerformersType;
      name: string[];
    };
  }[];
};

export type SingleResponse = CdResponse & {
  behindPerformers: {
    trainees: string[];
    skips: string[];
  };
};

export type AlbumResponse = CdResponse;

export type MemberResponse = {
  name: string;
  nameNotations: {
    firstName: string;
    lastName: string;
    firstNameFurigana: string;
    lastNameFurigana: string;
    firstNameEn: string;
    lastNameEn: string;
  };
  profileImage: {
    large: string;
    small: string;
  };
  singleImages: {
    singleNumber: number;
    image: string;
  }[];
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: BloodType;
  sites: SiteResponse[];
  photoAlbums: {
    title: string;
    release: string;
    type: PhotoAlbumType;
    shopping: SiteResponse[];
  }[];
  units: {
    name: string;
    type: UnitType;
  }[];
  positionsHistory: {
    singleNumber: string;
    position: PositionType;
  }[];
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
