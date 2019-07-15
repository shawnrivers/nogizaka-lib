import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IRootState } from 'stores/state';
import * as MembersSelectors from '../selectors';
import { getMembers } from '../actions';
import { Member, IMemberProps } from 'components/templates/Member';
import { FetchStatus } from 'utils/constants';

type MatchParams = {
  name: string;
};

export const MemberContainer = (ownProps: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();

  const { name } = ownProps.match.params;

  const { members, fetchStatus } = useSelector((state: IRootState) => ({
    members: MembersSelectors.selectMembers(state),
    fetchStatus: MembersSelectors.selectMembersFetchStatus(state),
  }));

  const memberProps: IMemberProps = React.useMemo(
    () => ({
      member: MembersSelectors.convertMemberForDisplay(members[name]),
      memberType: MembersSelectors.selectMemberType(members[name]),
    }),
    [name, members],
  );

  React.useEffect(() => {
    if (fetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getMembers());
    }
  }, []);

  return <Member {...memberProps} />;
};
