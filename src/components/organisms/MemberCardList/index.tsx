import * as React from 'react';
import { IMember } from 'models/IMember';
import { MembersCurrentPage } from 'utils/constants';
import { MemberCard } from 'components/molecules/MemberCard';
import styles from './MemberCardList.module.scss';

export type MembersByType = {
  [MembersCurrentPage.First]: IMember[];
  [MembersCurrentPage.Second]: IMember[];
  [MembersCurrentPage.Third]: IMember[];
  [MembersCurrentPage.Fourth]: IMember[];
  [MembersCurrentPage.Graduate]: IMember[];
};

interface IMemberCardListProps {
  members: MembersByType;
  currentPage: MembersCurrentPage;
}

export const MemberCardList = (props: IMemberCardListProps) => {
  const { members, currentPage } = props;

  const membersLength = React.useMemo(
    () =>
      members.first.length +
      members.second.length +
      members.third.length +
      members.fourth.length +
      members.graduate.length,
    [members],
  );

  const currentTabMembers = React.useMemo(() => {
    switch (currentPage) {
      case MembersCurrentPage.First:
        return members.first;
      case MembersCurrentPage.Second:
        return members.second;
      case MembersCurrentPage.Third:
        return members.third;
      case MembersCurrentPage.Fourth:
        return members.fourth;
      case MembersCurrentPage.Graduate:
        return members.graduate;
    }
  }, [members, currentPage]);

  return membersLength > 0 ? (
    <div className={styles.container}>
      {currentTabMembers.map(member => (
        <MemberCard
          key={member.name}
          name={member.name}
          profileImage={member.profileImage}
          displayName={`${member.nameNotations.lastName} ${member.nameNotations.firstName}`}
        />
      ))}
    </div>
  ) : null;
};
