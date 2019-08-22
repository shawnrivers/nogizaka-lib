import {
  CdType,
  FocusPerformersType,
  SongType,
  BloodType,
  PhotoAlbumType,
  UnitType,
  JoinedGeneration,
  FukujinType,
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
    large: string;
    medium: string;
    small: string;
  }[];
  shopping: SiteResponse[];
  songs: {
    number: number;
    title: string;
    key: string;
    inCdType: CdType[];
    type: SongType;
    artwork: {
      large: string;
      medium: string;
      small: string;
    };
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
  glowStickColor: {
    left: string;
    right: string;
  };
  profileImage: {
    large: string;
    small: string;
  };
  singleImages: {
    [singleNumber: string]: {
      large: string;
      small: string;
    };
  };
  join: JoinedGeneration;
  birthday: string;
  height: number;
  bloodType: BloodType;
  origin: string;
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

export type SongResponse = {
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
  performers: {
    center: string[];
    fukujin: FukujinType | string[];
    solo: string;
    unit: string;
  };
  performersTag: {
    name: string;
    singleNumber: string;
  };
  formations: {
    firstRow: string[];
    secondRow: string[];
    thirdRow: string[];
    fourthRow: string[];
  };
};
