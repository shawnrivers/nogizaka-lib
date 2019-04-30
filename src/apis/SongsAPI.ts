import { ISong } from '../models/ISong';
import { SongResponse } from './responseTypes';
import { fetchGet } from '../utils/fetch';

const convertSongResponse = (songResponse: SongResponse): ISong => ({
  title: songResponse.title,
  key: songResponse.key,
  single: songResponse.single,
  albums: songResponse.albums,
  artwork: songResponse.artwork,
  musicVideo: songResponse.musicVideo,
  type: songResponse.type,
  creators: songResponse.creators,
  performers: songResponse.performers,
  performersTag: songResponse.performersTag,
  formations: songResponse.formations,
});

export const fetchSongs = async (): Promise<ISong[]> => {
  const songsResponse: SongResponse[] = await fetchGet(
    'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/songs.json',
  );

  const convertedSongs = songsResponse.map(songsResponse => convertSongResponse(songsResponse));

  return convertedSongs;
};
