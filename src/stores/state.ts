import { ICdsState } from '../containers/Cds/reducers';
import { IMembersState } from '../containers/Members/reducers';

export interface IRootState {
  cds: ICdsState;
  members: IMembersState;
}
