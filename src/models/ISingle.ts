import { ICd } from './ICd';

type ISingleBehindPerformers = {
  trainees: string[];
  skips: string[];
};

export type ISingle = ICd & {
  behindPerformers: ISingleBehindPerformers;
};

export type ISingles = {
  [title: string]: ISingle;
};
