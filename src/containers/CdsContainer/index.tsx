import * as React from 'react';
import { connect } from 'react-redux';
import { Cds } from '../../components/templates/Cds';
import { fetchSingles, fetchAlbums } from './store/actions';
import { CdsCurrentPage, FetchStatus } from '../../utils/constants';
import { ISingle } from '../../models/ISingle';
import { IAlbum } from '../../models/IAlbum';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IRootState } from '../../stores/state';
import { ICdsState } from './store/reducers';

type IMatchParams = {
  type: CdsCurrentPage;
};

interface ICdsContainerProps extends RouteComponentProps<IMatchParams> {
  cds: ICdsState;
  currentPage: CdsCurrentPage;
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

const CdsContainer = (props: ICdsContainerProps) => {
  React.useEffect(() => {
    if (props.cds.singles.fetchStatus === FetchStatus.None) {
      props.fetchSingles();
    }
    if (props.cds.albums.fetchStatus === FetchStatus.None) {
      props.fetchAlbums();
    }
  }, []);

  const currentPage = props.match.params.type;
  const cdsContents = React.useMemo(() => getCurrentPageCds(currentPage, props.cds), [currentPage, props.cds]);

  return <Cds cds={cdsContents} currentPage={currentPage} />;
};

export const CdsContianer = connect(
  (state: IRootState) => ({
    cds: state.cds,
  }),
  (dispatch: Dispatch<any>) => ({
    fetchSingles: () => dispatch(fetchSingles()),
    fetchAlbums: () => dispatch(fetchAlbums()),
  }),
)(CdsContainer);
