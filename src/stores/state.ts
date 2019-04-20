import { ICdsState } from '../containers/CdsContainer/store/reducers';
import { IMembersState } from '../containers/MembersContainer/store/reducers';

export interface IRootState {
  cds: ICdsState;
  members: IMembersState;
}
