import { fetchGet } from '../utils/fetch';
import { AlbumResponse } from './responseTypes';
import { IAlbum } from '../models/IAlbum';

const convertAlbumResponse = (albumResponse: AlbumResponse): IAlbum => {
  const { number, title, release, artworks, shopping, songs } = albumResponse;

  return {
    number,
    title,
    release,
    artworks,
    shopping,
    songs,
  };
};

export const fetchAlbums = async (): Promise<IAlbum[]> => {
  const albumsResponse: AlbumResponse[] = await fetchGet(
    'https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/albums.json',
  );

  const convertedAlbums = albumsResponse.map(albumResponse => convertAlbumResponse(albumResponse));

  return convertedAlbums;
};
