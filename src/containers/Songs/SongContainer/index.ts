import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IRootState } from '../../../stores/state';
import { ISongVariableProps, ISongFunctionProps, Song } from '../../../components/templates/Song';
import * as SongsSelectors from '../selectors';
import { getSongs } from '../actions';

type MatchParams = {
  key: string;
};

const mapStateToProps = (state: IRootState, ownProps: RouteComponentProps<MatchParams>): ISongVariableProps => ({
  song: SongsSelectors.SelectSongByKeyForDisplay(state, ownProps.match.params.key),
});

const mapDispatchToProps = (dispatch: Dispatch<any>): ISongFunctionProps => ({
  getSongs: () => dispatch(getSongs()),
});

export const SongContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Song);
