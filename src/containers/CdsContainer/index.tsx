import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Cds } from "../../components/templates/Cds";
import { switchCdsPage, fetchSingles, fetchAlbums } from "./store/actions";
import { CdsCurrentPage, FetchStatus } from "../../utils/constants";
import { ISingle } from "../../models/ISingle";
import { IAlbum } from "../../models/IAlbum";
import { Dispatch } from "redux";

export type ICdsContainerProps = {
  cds: {
    singles: {
      data: ISingle[];
      fetchStatus: FetchStatus;
    };
    albums: {
      data: IAlbum[];
      fetchStatus: FetchStatus;
    };
  };
  currentPage: CdsCurrentPage;
  switchCdsPage(page: CdsCurrentPage): void;
  fetchSingles(): void;
  fetchAlbums(): void;
};

const CdsContainer = (props: ICdsContainerProps) => {
  useEffect(() => {
    if (
      props.cds.singles.fetchStatus !== FetchStatus.Fulfilled ||
      props.cds.albums.fetchStatus !== FetchStatus.Fulfilled
    ) {
      props.fetchSingles();
      props.fetchAlbums();
    }
  }, []);

  console.log(props.currentPage);
  let cdsContents: ISingle[] | IAlbum[];
  switch (props.currentPage) {
    case CdsCurrentPage.Single:
      cdsContents = props.cds.singles.data;
      break;
    case CdsCurrentPage.Album:
      cdsContents = props.cds.albums.data;
      break;
    default:
      cdsContents = [];
      break;
  }

  return (
    <Cds
      cds={cdsContents}
      currentPage={props.currentPage}
      handleClickSwitch={props.switchCdsPage}
    />
  );
};

const mapStateToProps = (state: any) => ({
  cds: state.cds,
  currentPage: state.cds.currentPage
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  switchCdsPage: (page: CdsCurrentPage) => dispatch(switchCdsPage(page)),
  fetchSingles: () => dispatch(fetchSingles()),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export const CdsContianer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CdsContainer);
