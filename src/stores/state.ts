import { ICdsState } from '../containers/Cds/reducers';
import { IMembersState } from '../containers/Members/reducers';
import { ISongsState } from '../containers/Songs/reducers';

export interface IRootState {
  cds: ICdsState;
  members: IMembersState;
  songs: ISongsState;
}
