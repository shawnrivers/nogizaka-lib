import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Members } from '../../../components/templates/Members';
import { IRootState } from '../../../stores/state';
import { getMembers } from '../actions';
import * as MembersSelectors from '../selectors';
import { RouteComponentProps } from 'react-router';
import { MembersCurrentPage, FetchStatus } from '../../../utils/constants';

type OwnProps = RouteComponentProps<{
  generation: MembersCurrentPage;
}>;

export const MembersContainer = (ownProps: OwnProps) => {
  const dispatch = useDispatch();

  const { members, fetchStatus, membersByType } = useSelector((state: IRootState) => ({
    fetchStatus: MembersSelectors.selectMembersFetchStatus(state),
    members: MembersSelectors.selectMembers(state),
    membersByType: {
      first: MembersSelectors.selectFirstGeneration(state),
      second: MembersSelectors.selectSecondGeneration(state),
      third: MembersSelectors.selectThirdGeneration(state),
      fourth: MembersSelectors.selectFourthGeneration(state),
      graduate: MembersSelectors.selectGraduates(state),
    },
  }));

  React.useEffect(() => {
    if (fetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getMembers());
    }
  }, []);

  return <Members members={members} membersByType={membersByType} currentLocation={ownProps.match.params.generation} />;
};
