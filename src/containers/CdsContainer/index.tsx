import { connect } from 'react-redux';
import { Cds, ICdsVariableProps, ICdsFunctionProps } from '../../components/templates/Cds';
import { getSingles, getAlbums } from './store/actions';
import { Dispatch } from 'redux';
import { IRootState } from '../../stores/state';

const mapStateToProps = (state: IRootState): ICdsVariableProps=> ({
  cds: state.cds,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): ICdsFunctionProps => ({
  getSingles: () => dispatch(getSingles()),
  getAlbums: () => dispatch(getAlbums()),
});

export const CdsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cds);
