import { connect } from 'react-redux';
import { Cds } from '../../components/templates/Cds';
import { getSingles, fetchAlbums } from './store/actions';
import { Dispatch } from 'redux';
import { IRootState } from '../../stores/state';

export const CdsContainer = connect(
  (state: IRootState) => ({
    cds: state.cds,
  }),
  (dispatch: Dispatch<any>) => ({
    getSingles: () => dispatch(getSingles()),
    fetchAlbums: () => dispatch(fetchAlbums()),
  }),
)(Cds);
