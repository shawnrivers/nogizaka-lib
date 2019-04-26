import { IRootState } from '../../stores/state';
import { ISingles, ISingle } from '../../models/ISingle';
import { IAlbums, IAlbum } from '../../models/IAlbum';
import { FetchStatus } from '../../utils/constants';

export const selectSingles = (state: IRootState): ISingles => state.cds.singles.data;
export const selectAlbums = (state: IRootState): IAlbums => state.cds.albums.data;

export const selectSingleArray = (state: IRootState): ISingle[] => Object.values(selectSingles(state));
export const selectAlbumArray = (state: IRootState): IAlbum[] => Object.values(selectAlbums(state));

export const selectSinglesFetchStatus = (state: IRootState): FetchStatus => state.cds.singles.fetchStatus;
export const selectAlbumsFetchStatus = (state: IRootState): FetchStatus => state.cds.albums.fetchStatus;

export const selectSingleByTitle = (state: IRootState, title: string): ISingle => selectSingles(state)[title];
export const selectAlbumByTitle = (state: IRootState, title: string): IAlbum => selectAlbums(state)[title];
