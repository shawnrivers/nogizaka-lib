import * as React from 'react';
import { ISingle } from 'models/ISingle';
import { IAlbum } from 'models/IAlbum';
import { CdCardList } from 'components/organisms/CdCardList';
import { CdsCurrentPage } from 'utils/constants';
import { NavigationBar } from 'components/molecules/NavigationBar';
import styles from './Cds.module.scss';
import { TabBar, TabItem } from 'components/molecules/TabBar';

interface ICdsProps {
  currentLocation: CdsCurrentPage;
  singles: ISingle[];
  albums: IAlbum[];
  tabItems: TabItem[];
}

export const Cds = (props: ICdsProps) => (
  <>
    <NavigationBar currentTab="cds" />
    <main className={styles.container}>
      <div className={styles.tab}>
        <TabBar items={props.tabItems} selectedItem={props.currentLocation} />
      </div>
      <div className={styles['card-list']}>
        <CdCardList singles={props.singles} albums={props.albums} currentPage={props.currentLocation} />
      </div>
    </main>
  </>
);
