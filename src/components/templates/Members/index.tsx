import * as React from 'react';
import { NavigationBar } from 'components/molecules/NavigationBar';
import { TriangleBackground } from 'components/atoms/Background/TriangleBackground';
import { TabMenu, TabMenuItem } from 'components/molecules/TabMenu';
import { MembersCurrentPage, MemberGenerationType, FetchStatus } from 'utils/constants';
import { MemberCardList, MembersByType } from 'components/organisms/MemberCardList';
import { IMembers } from 'models/IMember';
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
  const { membersByType } = props;

  return (
    <>
      <NavigationBar currentTab="members" />
      <main className={styles.container}>
        <TriangleBackground pattern="2" position="top" />
        <TabMenu items={membersTabMenuItems} selectedItem={props.currentLocation} />
        <MemberCardList members={membersByType} currentPage={props.currentLocation} />
      </main>
    </>
  );
};
