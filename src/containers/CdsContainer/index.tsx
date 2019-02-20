import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Cds } from '../../components/templates/Cds';
import { fetchSingles, fetchAlbums } from './store/actions';
import { CdsCurrentPage, FetchStatus } from '../../utils/constants';
import { ISingle } from '../../models/ISingle';
import { IAlbum } from '../../models/IAlbum';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';

type IMatchParams = {
  type: CdsCurrentPage;
};

type ICds = {
  singles: {
    data: ISingle[];
    fetchStatus: FetchStatus;
  };
  albums: {
    data: IAlbum[];
    fetchStatus: FetchStatus;
  };
};

export interface ICdsContainerProps extends RouteComponentProps<IMatchParams> {
  cds: ICds;
  currentPage: CdsCurrentPage;
  fetchSingles(): void;
  fetchAlbums(): void;
}

const getCurrentPageCds = (cdsCurrentPage: CdsCurrentPage, cds: ICds): (ISingle | IAlbum)[] => {
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
  const useFetchSingles = () => {
    useEffect(() => {
      if (props.cds.singles.fetchStatus === FetchStatus.None) {
        props.fetchSingles();
      }
    }, [props.cds.singles.fetchStatus]);
  };

  const useFetchAlbums = () => {
    useEffect(() => {
      if (props.cds.albums.fetchStatus === FetchStatus.None) {
        props.fetchAlbums();
      }
    }, [props.cds.albums.fetchStatus]);
  };

  useFetchSingles();
  useFetchAlbums();

  const currentPage = props.match.params.type;
  const cdsContents = getCurrentPageCds(currentPage, props.cds);

  return <Cds cds={cdsContents} currentPage={currentPage} />;
};

const mapStateToProps = (state: any) => ({
  cds: state.cds,
  currentPage: state.cds.currentPage,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  fetchSingles: () => dispatch(fetchSingles()),
  fetchAlbums: () => dispatch(fetchAlbums()),
});

export const CdsContianer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CdsContainer);
