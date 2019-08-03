import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Members } from 'components/templates/Members';
import { IRootState } from 'stores/state';
import { getMembers } from '../actions';
import * as MembersSelectors from '../selectors';
import { RouteComponentProps } from 'react-router';
import { MembersCurrentPage, FetchStatus, MemberGenerationType } from 'utils/constants';
import { TabItem } from 'components/molecules/TabBar';

const membersTabItems: TabItem[] = [
  {
    link: `/members/${MembersCurrentPage.First}`,
    page: MembersCurrentPage.First,
    name: MemberGenerationType.First,
  },
  {
    link: `/members/${MembersCurrentPage.Second}`,
    page: MembersCurrentPage.Second,
    name: MemberGenerationType.Second,
  },
  {
    link: `/members/${MembersCurrentPage.Third}`,
    page: MembersCurrentPage.Third,
    name: MemberGenerationType.Third,
  },
  {
    link: `/members/${MembersCurrentPage.Fourth}`,
    page: MembersCurrentPage.Fourth,
    name: MemberGenerationType.Fourth,
  },
  {
    link: `/members/${MembersCurrentPage.Graduate}`,
    page: MembersCurrentPage.Graduate,
    name: MemberGenerationType.Graduate,
  },
];

type MatchParams = {
  generation: MembersCurrentPage;
};

export const MembersContainer = (props: RouteComponentProps<MatchParams>) => {
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

  return (
    <Members
      members={members}
      membersByType={membersByType}
      currentLocation={props.match.params.generation}
      tabItems={membersTabItems}
    />
  );
};
