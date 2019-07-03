import * as React from 'react';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import { CdCardList } from '../../organisms/CdCardList';
import { TriangleBackground } from '../../atoms/Background/TriangleBackground';
import { TabMenu, TabMenuItem } from '../../molecules/TabMenu';
import { CdsCurrentPage, FetchStatus } from '../../../utils/constants';
import { NavigationBar } from '../../molecules/NavigationBar';
import styles from './Cds.module.scss';

interface ICdsProps {
  currentLocation: CdsCurrentPage;
  singles: ISingle[];
  albums: IAlbum[];
}

const cdsTabMenuItems: TabMenuItem[] = [
  {
    link: `/cds/${CdsCurrentPage.Single}`,
    page: CdsCurrentPage.Single,
    name: 'Singles',
  },
  {
    link: `/cds/${CdsCurrentPage.Album}`,
    page: CdsCurrentPage.Album,
    name: 'Albums',
  },
];

export const Cds = (props: ICdsProps) => (
  <>
    <NavigationBar currentTab="cds" />
    <main className={styles.container}>
      <TriangleBackground pattern="1" position="top" />
      <TabMenu items={cdsTabMenuItems} selectedItem={props.currentLocation} />
      <CdCardList singles={props.singles} albums={props.albums} currentPage={props.currentLocation} />
    </main>
  </>
);
