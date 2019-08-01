import * as React from 'react';
import { ISingle } from 'models/ISingle';
import { IAlbum } from 'models/IAlbum';
import { CdCardList } from 'components/organisms/CdCardList';
import { TabMenu, TabMenuItem } from 'components/molecules/TabMenu';
import { CdsCurrentPage } from 'utils/constants';
import { NavigationBar } from 'components/molecules/NavigationBar';
import { GradientBackground } from 'components/atoms/Background/GradientBackground';
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
      <GradientBackground />
      <TabMenu items={cdsTabMenuItems} selectedItem={props.currentLocation} />
      <CdCardList singles={props.singles} albums={props.albums} currentPage={props.currentLocation} />
    </main>
  </>
);
