import { connect } from 'react-redux';
import { Members } from '../../components/templates/Members';
import { IRootState } from '../../stores/state';
import { IMembersState } from './store/reducers';
import { Dispatch } from 'redux';
import { getMembers } from './store/actions';

const mapStateToProps = (state: IRootState): { members: IMembersState } => ({
  members: state.members,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getMembers: () => dispatch(getMembers()),
});

export const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);
