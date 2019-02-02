import { ICd } from "./ICd";
import { CdType, SongType, FocusPerformersType } from "../utils/constants";

export type ISingle = ICd & {
  songs: ISingleSong[];
  behindPerformers: ISingleBehindPerformers;
};

export type ISingleSong = {
  number: number;
  title: string;
  inType: CdType;
  type: SongType;
  focusPerformers: IFocusPerformers;
};
export type IFocusPerformers = {
  type: FocusPerformersType;
  name: string[];
};

export type ISingleBehindPerformers = {
  trainees: string[];
  skips: string[];
};
