import * as React from 'react';
import { NavigationBar } from '../../molecules/NavigationBar';
import { TriangleBackground } from '../../atoms/Background/TriangleBackground';
import { TabMenu, TabMenuItem } from '../../molecules/TabMenu';
import { MembersCurrentPage, MemberGenerationType, FetchStatus } from '../../../utils/constants';
import { RouteComponentProps } from 'react-router-dom';
import { MemberCardList, MembersByType } from '../../organisms/MemberCardList';
import { IMembers } from '../../../models/IMember';
import styles from './Members.module.scss';

type MatchParams = {
  generation: MembersCurrentPage;
};

export type IMemberVariableProps = {
  members: IMembers;
  fetchStatus: FetchStatus;
  membersByType: MembersByType;
};

export type IMemberFunctionProps = {
  getMembers(): void;
};

interface IMembersProps extends RouteComponentProps<MatchParams>, IMemberVariableProps, IMemberFunctionProps {}

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
  const { fetchStatus, membersByType } = props;

  React.useEffect(() => {
    if (fetchStatus === FetchStatus.None || fetchStatus === FetchStatus.Rejected) {
      props.getMembers();
    }
  }, []);

  return (
    <>
      <main className={styles.container}>
        <TriangleBackground pattern="2" position="top" />
        <TabMenu items={membersTabMenuItems} selectedItem={props.match.params.generation} />
        <MemberCardList members={membersByType} currentPage={props.match.params.generation} />
      </main>
      <NavigationBar currentTab="members" />
    </>
  );
};
