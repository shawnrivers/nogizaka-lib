import { ICd } from "./ICd";
import { SongType, FocusPerformersType } from "../utils/constants";

export interface IAlbum extends ICd {
  songs: IAlbumSong[];
}

export interface IAlbumSong {
  number: number;
  title: string;
  type: SongType;
  focusPerformers: IFocusPerformers;
}

interface IFocusPerformers {
  type: FocusPerformersType;
  name: string[];
}
