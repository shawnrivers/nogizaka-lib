import * as React from 'react';
import { NavigationBar } from '../../molecules/NavigationBar';
import { TriangleBackground } from '../../atoms/Background/TriangleBackground';
import { TabMenu, TabMenuItem } from '../../molecules/TabMenu';
import { MembersCurrentPage } from '../../../utils/constants';
import { RouteComponentProps } from 'react-router-dom';

type MatchParams = {
  generation: MembersCurrentPage;
};

interface IMembersProps extends RouteComponentProps<MatchParams> {}

const membersTabMenuItems: TabMenuItem[] = [
  {
    link: `/members/${MembersCurrentPage.First}`,
    page: MembersCurrentPage.First,
    name: '1期生',
  },
  {
    link: `/members/${MembersCurrentPage.Second}`,
    page: MembersCurrentPage.Second,
    name: '2期生',
  },
  {
    link: `/members/${MembersCurrentPage.Third}`,
    page: MembersCurrentPage.Third,
    name: '3期生',
  },
  {
    link: `/members/${MembersCurrentPage.Fourth}`,
    page: MembersCurrentPage.Fourth,
    name: '4期生',
  },
  {
    link: `/members/${MembersCurrentPage.Graduate}`,
    page: MembersCurrentPage.Graduate,
    name: '卒業生',
  },
];

export const Members = (props: IMembersProps) => {
  return (
    <div>
      <TriangleBackground pattern="2" position="top" />
      <TabMenu items={membersTabMenuItems} selectedItem={props.match.params.generation} />
      <NavigationBar currentTab="members" />
    </div>
  );
};
