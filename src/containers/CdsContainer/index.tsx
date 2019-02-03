import * as React from "react";
import { connect } from "react-redux";
import { Cds } from "../../components/templates/Cds";
import {
  shiftCdsPage,
  switchCdsPage,
  fetchSingles,
  fetchAlbums
} from "./store/actions";
import { CdsCurrentPage, FetchStatus } from "../../utils/constants";
import { ISingle } from "../../models/ISingle";
import { IAlbum } from "../../models/IAlbum";
import { Dispatch } from "redux";

type ICdsContainerProps = {
  cds: {
    singles: {
      data: ISingle[],
      fetchStatus: FetchStatus
    };
    albums: {
      data: IAlbum[],
      fetchStatus: FetchStatus
    };
  };
  currentPage: CdsCurrentPage;
  switchCdsPage(page: CdsCurrentPage): void;
  shiftCdsPage(): void;
  fetchSingles(): void;
  fetchAlbums(): void;
};

class CdsContainer extends React.Component<ICdsContainerProps> {
  componentDidMount() {
    if (
      this.props.cds.singles.data.length === 0 &&
      this.props.cds.albums.data.length === 0
    ) {
      console.log("[componentDidMount] fetching singles & albums");
      this.props.fetchSingles();
      this.props.fetchAlbums();
    }
  }

  render() {
    console.log(this.props.currentPage);
    let cdsContents: ISingle[] | IAlbum[];
    switch (this.props.currentPage) {
      case "singles":
        cdsContents = this.props.cds.singles.data;
        break;
      case "albums":
        cdsContents = this.props.cds.albums.data;
        break;
      default:
        cdsContents = [];
        break;
    }

    return (
      <Cds
        cds={cdsContents}
        currentPage={this.props.currentPage}
        handleClickSwitch={this.props.switchCdsPage}
        handleClickShift={this.props.shiftCdsPage}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  cds: state.cds,
  currentPage: state.cds.currentPage
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  switchCdsPage: (page: CdsCurrentPage) => dispatch(switchCdsPage(page)),
  shiftCdsPage: () => dispatch(shiftCdsPage()),
  fetchSingles: () => dispatch(fetchSingles()),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export const CdsContianer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CdsContainer);
