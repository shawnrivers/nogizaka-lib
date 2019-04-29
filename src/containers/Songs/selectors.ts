import { IRootState } from '../../stores/state';
import { ISongs, ISong } from '../../models/ISong';
import { FetchStatus } from '../../utils/constants';

const selectSongs = (state: IRootState): ISongs => state.songs.data;

export const selectSongsFetchStatus = (state: IRootState): FetchStatus => state.songs.fetchStatus;

export const selectSongByKey = (state: IRootState, key: string): ISong => selectSongs(state)[key];
