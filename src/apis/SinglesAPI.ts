import { fetchGet } from '../utils/fetch';
import { SingleResponse } from './responseTypes';
import { ISingle } from '../models/ISingle';

const convertSingleResponse = (singleResponse: SingleResponse): ISingle => {
  const { number, title, release, artworks, shopping, songs, behindPerformers } = singleResponse;

  return {
    number,
    title,
    release,
    artworks,
    shopping,
    songs,
    behindPerformers,
  };
};

export const fetchSingles = async (): Promise<ISingle[]> => {
  const singlesResponse: SingleResponse[] = await fetchGet(
    'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json',
  );

  const convertedSingles = singlesResponse.map(convertSingleResponse);

  return convertedSingles;
};
