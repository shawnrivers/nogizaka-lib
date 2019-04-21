import { connect } from 'react-redux';
import { Members, IMemberFunctionProps, IMemberVariableProps } from '../../components/templates/Members';
import { IRootState } from '../../stores/state';
import { Dispatch } from 'redux';
import { getMembers } from './store/actions';
import * as MembersSelectors from './store/selectors';

const mapStateToProps = (state: IRootState): IMemberVariableProps => ({
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

const mapDispatchToProps = (dispatch: Dispatch<any>): IMemberFunctionProps => ({
  getMembers: () => dispatch(getMembers()),
});

export const MembersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Members);
