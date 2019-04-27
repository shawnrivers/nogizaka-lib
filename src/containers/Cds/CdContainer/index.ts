import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IRootState } from '../../../stores/state';
import { Cd, ICdVariableProps, ICdFunctionProps } from '../../../components/templates/Cd';
import * as CdsSelectors from '../selectors';
import { getSingles, getAlbums } from '../actions';
import { CdsCurrentPage } from '../../../utils/constants';

type MatchParams = {
  type: string;
  title: string;
};

const mapStateToProps = (state: IRootState, ownProps: RouteComponentProps<MatchParams>): ICdVariableProps => ({
  cd:
    ownProps.match.params.type === CdsCurrentPage.Single
      ? CdsSelectors.selectSingleByTitle(state, ownProps.match.params.title)
      : CdsSelectors.selectAlbumByTitle(state, ownProps.match.params.title),
  fetchStatus:
    ownProps.match.params.type === CdsCurrentPage.Single
      ? CdsSelectors.selectSinglesFetchStatus(state)
      : CdsSelectors.selectAlbumsFetchStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: RouteComponentProps<MatchParams>): ICdFunctionProps => ({
  getCds: () => (ownProps.match.params.type === CdsCurrentPage.Single ? dispatch(getSingles()) : dispatch(getAlbums())),
});

export const CdContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cd);
