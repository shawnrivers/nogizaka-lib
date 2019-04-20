import { connect } from 'react-redux';
import { Members, IMemberFunctionProps, IMemberVariableProps } from '../../components/templates/Members';
import { IRootState } from '../../stores/state';
import { Dispatch } from 'redux';
import { getMembers } from './store/actions';
import { selectMembers, selectMembersByType, selectMembersFetchStatus } from './store/selectors';

const mapStateToProps = (state: IRootState): IMemberVariableProps => ({
  members: selectMembers(state),
  fetchStatus: selectMembersFetchStatus(state),
  membersByType: selectMembersByType(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IMemberFunctionProps => ({
  getMembers: () => dispatch(getMembers()),
});

export const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);
