import { ICd } from './ICd';

export type IAlbum = ICd;

export type IAlbums = {
  [title: string]: IAlbum;
};
