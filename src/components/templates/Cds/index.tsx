import * as React from 'react';
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
  getSingles(): void;
  getAlbums(): void;
}

export const Cds = (props: ICdsProps) => {
  React.useEffect(() => {
    if (props.cds.singles.fetchStatus === FetchStatus.None) {
      props.getSingles();
    }
    if (props.cds.albums.fetchStatus === FetchStatus.None) {
      props.getAlbums();
    }
  }, []);

  const pages = [CdsCurrentPage.Single, CdsCurrentPage.Album];
  const currentPage = props.match.params.type;

  return (
    <div>
      <TopLeftBackground />
      <TabMenu items={pages} currentPage={currentPage} />
      <CdCardList singles={props.cds.singles.data} albums={props.cds.albums.data} currentPage={currentPage} />
    </div>
  );
};
