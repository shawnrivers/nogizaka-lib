import { CdType, FocusPerformersType, SongType } from '../utils/constants';

type CdArtworksResponse = {
  type: CdType;
  urls: {
    large: string;
    medium: string;
    small: string;
  };
};

type FocusPerformersResponse = {
  type: FocusPerformersType;
  name: string[];
};

type SiteResponse = {
  title: string;
  url: string;
};

type CdSongResponse = {
  number: number;
  title: string;
  inCdType: CdType[];
  type: SongType;
  artwork: string;
  focusPerformers: FocusPerformersResponse;
};

type CdResponse = {
  title: string;
  number: string;
  release: string;
  artworks: CdArtworksResponse[];
  shopping: SiteResponse[];
  songs: CdSongResponse[];
};

type SingleBehindPerformers = {
  trainees: string[];
  skips: string[];
};

export type SingleResponse = CdResponse & {
  behindPerformers: SingleBehindPerformers;
};

export type AlbumResponse = CdsResponse;
