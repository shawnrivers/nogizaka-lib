import { connect } from 'react-redux';
import { Members, IMembersFunctionProps, IMembersVariableProps } from '../../../components/templates/Members';
import { IRootState } from '../../../stores/state';
import { Dispatch } from 'redux';
import { getMembers } from '../actions';
import * as MembersSelectors from '../selectors';
import { RouteComponentProps } from 'react-router';
import { MembersCurrentPage } from '../../../utils/constants';

type OwnProps = RouteComponentProps<{
  generation: MembersCurrentPage;
}>;

const mapStateToProps = (state: IRootState, ownProps: OwnProps): IMembersVariableProps => ({
  currentLocation: ownProps.match.params.generation,
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
