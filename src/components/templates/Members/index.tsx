import * as React from 'react';
import { NavigationBar } from 'components/molecules/NavigationBar';
import { MembersCurrentPage } from 'utils/constants';
import { MemberCardList, MembersByType } from 'components/organisms/MemberCardList';
import { IMembers } from 'models/IMember';
import styles from './Members.module.scss';
import { TabItem, TabBar } from 'components/molecules/TabBar';
interface IMembersProps {
  currentLocation: MembersCurrentPage;
  members: IMembers;
  membersByType: MembersByType;
  tabItems: TabItem[];
}

export const Members = (props: IMembersProps) => (
  <>
    <NavigationBar currentTab="members" />
    <main className={styles.container}>
      <div className={styles.tab}>
        <TabBar items={props.tabItems} selectedItem={props.currentLocation} />
      </div>
      <div className={styles['card-list']}>
        <MemberCardList members={props.membersByType} currentPage={props.currentLocation} />
      </div>
    </main>
  </>
);
