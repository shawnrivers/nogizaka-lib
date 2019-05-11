import { IRootState } from '../../../stores/state';
import { connect } from 'react-redux';
import { Cds, ICdsVariableProps, ICdsFunctionProps } from '../../../components/templates/Cds';
import { getSingles, getAlbums } from '../actions';
import { Dispatch } from 'redux';
import * as CdsSelectors from '../selectors';
import { RouteComponentProps } from 'react-router';
import { CdsCurrentPage } from '../../../utils/constants';

type OwnProps = RouteComponentProps<{
  type: CdsCurrentPage;
}>;

const mapStateToProps = (state: IRootState, ownProps: OwnProps): ICdsVariableProps => ({
  currentLocation: ownProps.match.params.type,
  singles: {
    data: CdsSelectors.selectSingleArray(state),
    fetchStatus: CdsSelectors.selectSinglesFetchStatus(state),
  },
  albums: {
    data: CdsSelectors.selectAlbumArray(state),
    fetchStatus: CdsSelectors.selectAlbumsFetchStatus(state),
  },
});

const mapDispatchToProps = (dispatch: Dispatch<any>): ICdsFunctionProps => ({
  getSingles: () => dispatch(getSingles()),
  getAlbums: () => dispatch(getAlbums()),
});

export const CdsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cds);
