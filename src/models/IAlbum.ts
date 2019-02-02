import { ICd } from "./ICd";
import { SongType, FocusPerformersType } from "../utils/constants";

export type IAlbum = ICd & {
  songs: IAlbumSong[];
};

export type IAlbumSong = {
  number: number;
  title: string;
  type: SongType;
  focusPerformers: IFocusPerformers;
};

type IFocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};
