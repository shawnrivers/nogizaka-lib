import { connect } from 'react-redux';
import { Cds } from '../../components/templates/Cds';
import { getSingles, getAlbums } from './store/actions';
import { Dispatch } from 'redux';
import { IRootState } from '../../stores/state';

const mapStateToProps = (state: IRootState) => ({
  cds: state.cds,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  getSingles: () => dispatch(getSingles()),
  getAlbums: () => dispatch(getAlbums()),
});

export const CdsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cds);
