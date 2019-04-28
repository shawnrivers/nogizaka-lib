import { connect } from 'react-redux';
import { Members, IMembersFunctionProps, IMembersVariableProps } from '../../../components/templates/Members';
import { IRootState } from '../../../stores/state';
import { Dispatch } from 'redux';
import { getMembers } from '../actions';
import * as MembersSelectors from '../selectors';

const mapStateToProps = (state: IRootState): IMembersVariableProps => ({
  members: MembersSelectors.selectMembers(state),
  fetchStatus: MembersSelectors.selectMembersFetchStatus(state),
  membersByType: {
    first: MembersSelectors.selectFirstGeneration(state),
    second: MembersSelectors.selectSecondGeneration(state),
    third: MembersSelectors.selectThirdGeneration(state),
    fourth: MembersSelectors.selectFourthGeneration(state),
    graduate: MembersSelectors.selectGraduates(state),
  },
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IMembersFunctionProps => ({
  getMembers: () => dispatch(getMembers()),
});

export const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);
