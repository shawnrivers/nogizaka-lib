import * as React from 'react';
import styles from './Cds.module.scss';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import { ICdsState } from '../../../containers/CdsContainer/store/reducers';
import { CdCardList } from '../../organisms/CdCardList';
import { TopLeftBackground } from '../../atoms/Background/TopLeftBackground';
import { TabMenu } from '../../molecules/TabMenu';
import { CdsCurrentPage, FetchStatus } from '../../../utils/constants';
import { RouteComponentProps } from 'react-router-dom';

type IMatchParams = {
  type: CdsCurrentPage;
};
interface ICdsProps extends RouteComponentProps<IMatchParams> {
  cds: ICdsState;
  fetchSingles(): void;
  fetchAlbums(): void;
}

const getCurrentPageCds = (cdsCurrentPage: CdsCurrentPage, cds: ICdsState): (ISingle | IAlbum)[] => {
  switch (cdsCurrentPage) {
    case CdsCurrentPage.Single:
      return cds.singles.data;
    case CdsCurrentPage.Album:
      return cds.albums.data;
    default:
      return [];
  }
};

export const Cds = (props: ICdsProps) => {
  React.useEffect(() => {
    if (props.cds.singles.fetchStatus === FetchStatus.None) {
      props.fetchSingles();
    }
    if (props.cds.albums.fetchStatus === FetchStatus.None) {
      props.fetchAlbums();
    }
  }, []);

  const pages = [CdsCurrentPage.Single, CdsCurrentPage.Album];
  const currentPage = props.match.params.type;
  const cdsContents = React.useMemo(() => getCurrentPageCds(currentPage, props.cds), [currentPage, props.cds]);

  return (
    <div className={styles.container}>
      <TopLeftBackground />
      <TabMenu items={pages} currentPage={currentPage} />
      <CdCardList cds={cdsContents} currentPage={currentPage} />
    </div>
  );
};
