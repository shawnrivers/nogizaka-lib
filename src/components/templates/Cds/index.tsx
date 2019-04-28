import * as React from 'react';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import { CdCardList } from '../../organisms/CdCardList';
import { TriangleBackground } from '../../atoms/Background/TriangleBackground';
import { TabMenu, TabMenuItem } from '../../molecules/TabMenu';
import { CdsCurrentPage, FetchStatus } from '../../../utils/constants';
import { RouteComponentProps } from 'react-router-dom';
import { NavigationBar } from '../../molecules/NavigationBar';
import styles from './Cds.module.scss';

type MatchParams = {
  type: CdsCurrentPage;
};

export type ICdsVariableProps = {
  singles: {
    data: ISingle[];
    fetchStatus: FetchStatus;
  };
  albums: {
    data: IAlbum[];
    fetchStatus: FetchStatus;
  };
};

export type ICdsFunctionProps = {
  getSingles(): void;
  getAlbums(): void;
};

interface ICdsProps extends RouteComponentProps<MatchParams>, ICdsVariableProps, ICdsFunctionProps {}

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

export const Cds = (props: ICdsProps) => {
  React.useEffect(() => {
    if (props.singles.fetchStatus !== FetchStatus.Fulfilled) {
      props.getSingles();
    }
    if (props.albums.fetchStatus !== FetchStatus.Fulfilled) {
      props.getAlbums();
    }
  }, []);

  return (
    <>
      <NavigationBar currentTab="cds" />
      <main className={styles.container}>
        <TriangleBackground pattern="1" position="top" />
        <TabMenu items={cdsTabMenuItems} selectedItem={props.match.params.type} />
        <CdCardList singles={props.singles.data} albums={props.albums.data} currentPage={props.match.params.type} />
      </main>
    </>
  );
};
