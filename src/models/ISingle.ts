import { ICd } from "./ICd";

export type ISingle = ICd & {
  behindPerformers: ISingleBehindPerformers;
};

type ISingleBehindPerformers = {
  trainees: string[];
  skips: string[];
};
