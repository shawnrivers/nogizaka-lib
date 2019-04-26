import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { IRootState } from '../../../stores/state';
import { ICdProps, Cd } from '../../../components/templates/Cd';
import * as CdsSelectors from '../selectors';
import { CdsCurrentPage } from '../../../utils/constants';

const mapStateToProps = (
  state: IRootState,
  ownProps: RouteComponentProps<{ type: string; title: string }>,
): ICdProps => ({
  cd:
    ownProps.match.params.type === CdsCurrentPage.Single
      ? CdsSelectors.selectSingleByTitle(state, ownProps.match.params.title)
      : CdsSelectors.selectAlbumByTitle(state, ownProps.match.params.title),
});

export const CdContainer = connect(mapStateToProps)(Cd);
