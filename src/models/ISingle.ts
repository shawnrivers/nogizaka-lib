import { ICd } from "./ICd";
import { CdType, SongType, FocusPerformersType } from "../utils/constants";

export interface ISingle extends ICd {
  songs: ISingleSong[];
  behindPerformers: ISingleBehindPerformers;
}

export interface ISingleSong {
  number: number;
  title: string;
  inType: CdType;
  type: SongType;
  focusPerformers: IFocusPerformers;
}
export interface IFocusPerformers {
  type: FocusPerformersType;
  name: string[];
}

export interface ISingleBehindPerformers {
  trainees: string[];
  skips: string[];
}
