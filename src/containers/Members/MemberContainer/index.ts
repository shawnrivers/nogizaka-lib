import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IRootState } from '../../../stores/state';
import * as MembersSelectors from '../selectors';
import { getMembers } from '../actions';
import { Member, IMemberVariableProps, IMemberFunctionProps } from '../../../components/templates/Member';

type MatchParams = {
  name: string;
};

const mapStateToProps = (state: IRootState, ownProps: RouteComponentProps<MatchParams>): IMemberVariableProps => ({
  member: MembersSelectors.selectMemberByName(state, ownProps.match.params.name),
  fetchStatus: MembersSelectors.selectMembersFetchStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>): IMemberFunctionProps => ({
  getMembers: () => dispatch(getMembers()),
});

export const MemberContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Member);
