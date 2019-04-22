import * as React from 'react';
import { ICdsState } from '../../../containers/CdsContainer/store/reducers';
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

interface ICdsProps extends RouteComponentProps<MatchParams> {
  cds: ICdsState;
  getSingles(): void;
  getAlbums(): void;
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

export const Cds = (props: ICdsProps) => {
  React.useEffect(() => {
    if (props.cds.singles.fetchStatus === FetchStatus.None || props.cds.singles.fetchStatus === FetchStatus.Rejected) {
      props.getSingles();
    }
    if (props.cds.albums.fetchStatus === FetchStatus.None || props.cds.albums.fetchStatus === FetchStatus.Rejected) {
      props.getAlbums();
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <TriangleBackground pattern="1" position="top" />
        <TabMenu items={cdsTabMenuItems} selectedItem={props.match.params.type} />
        <CdCardList
          singles={props.cds.singles.data}
          albums={props.cds.albums.data}
          currentPage={props.match.params.type}
        />
      </div>
      <NavigationBar currentTab="cds" />
    </>
  );
};
