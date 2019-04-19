import * as React from 'react';
import { ICdsState } from '../../../containers/CdsContainer/store/reducers';
import { CdCardList } from '../../organisms/CdCardList';
import { TopLeftBackground } from '../../atoms/Background/TopLeftBackground';
import { TabMenu } from '../../molecules/TabMenu';
import { CdsCurrentPage, FetchStatus } from '../../../utils/constants';
import { RouteComponentProps } from 'react-router-dom';
import { NavigationBar } from '../../molecules/NavigationBar';

type MatchParams = {
  type: CdsCurrentPage;
};

interface ICdsProps extends RouteComponentProps<MatchParams> {
  cds: ICdsState;
  getSingles(): void;
  getAlbums(): void;
}

const pages = [CdsCurrentPage.Single, CdsCurrentPage.Album];

export const Cds = (props: ICdsProps) => {
  React.useEffect(() => {
    if (props.cds.singles.fetchStatus === FetchStatus.None) {
      props.getSingles();
    }
    if (props.cds.albums.fetchStatus === FetchStatus.None) {
      props.getAlbums();
    }
  }, []);

  return (
    <div>
      <TopLeftBackground />
      <TabMenu items={pages} currentPage={props.match.params.type} />
      <CdCardList
        singles={props.cds.singles.data}
        albums={props.cds.albums.data}
        currentPage={props.match.params.type}
      />
      <NavigationBar currentTab="cds" />
    </div>
  );
};
