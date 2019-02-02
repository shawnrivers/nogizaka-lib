import * as React from "react";
import { connect } from "react-redux";
import { Cds } from "../../components/templates/Cds";
import {
  shiftCdsPage,
  switchCdsPage,
  fetchSingles,
  fetchAlbums
} from "./store/actions";
import { CdsCurrentPage } from "../../utils/constants";
import { ISingle } from "../../models/ISingle";
import { IAlbum } from "../../models/IAlbum";

type ICdsContainerProps = {
  cds: {
    singles: ISingle[];
    albums: IAlbum[];
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
      this.props.cds.singles.length === 0 &&
      this.props.cds.albums.length === 0
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
        cdsContents = this.props.cds.singles;
        break;
      case "albums":
        cdsContents = this.props.cds.albums;
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

const mapDispatchToProps = (dispatch: any) => ({
  switchCdsPage: (page: CdsCurrentPage) => dispatch(switchCdsPage(page)),
  shiftCdsPage: () => dispatch(shiftCdsPage()),
  fetchSingles: () => dispatch(fetchSingles()),
  fetchAlbums: () => dispatch(fetchAlbums())
});

export const CdsContianer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CdsContainer);
