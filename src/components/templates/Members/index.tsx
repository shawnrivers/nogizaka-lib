import * as React from 'react';
import { NavigationBar } from 'components/molecules/NavigationBar';
import { TabMenu, TabMenuItem } from 'components/molecules/TabMenu';
import { MembersCurrentPage, MemberGenerationType } from 'utils/constants';
import { MemberCardList, MembersByType } from 'components/organisms/MemberCardList';
import { IMembers } from 'models/IMember';
import { GradientBackground } from 'components/atoms/Background/GradientBackground';
import styles from './Members.module.scss';
interface IMembersProps {
  currentLocation: MembersCurrentPage;
  members: IMembers;
  membersByType: MembersByType;
}

const membersTabMenuItems: TabMenuItem[] = [
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

export const Members = (props: IMembersProps) => {
  const { membersByType, currentLocation } = props;

  return (
    <>
      <NavigationBar currentTab="members" />
      <main className={styles.container}>
        <GradientBackground type={2} />
        <TabMenu items={membersTabMenuItems} selectedItem={currentLocation} />
        <MemberCardList members={membersByType} currentPage={currentLocation} />
      </main>
    </>
  );
};
