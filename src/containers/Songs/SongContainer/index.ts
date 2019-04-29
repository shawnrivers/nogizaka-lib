import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IRootState } from '../../../stores/state';
import { ISongVariableProps, ISongFunctionProps, Song } from '../../../components/templates/Song';
import * as SongsSelectors from '../selectors';
import * as MembersSelectors from '../../Members/selectors';
import { getSongs } from '../actions';
import { getMembers } from '../../Members/actions';

type MatchParams = {
  key: string;
};

const mapStateToProps = (state: IRootState, ownProps: RouteComponentProps<MatchParams>): ISongVariableProps => ({
  song: SongsSelectors.SelectSongByKeyForDisplay(state, ownProps.match.params.key),
  songsFetchStatus: SongsSelectors.selectSongsFetchStatus(state),
  membersFetchStatus: MembersSelectors.selectMembersFetchStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>): ISongFunctionProps => ({
  getSongs: () => dispatch(getSongs()),
  getMembers: () => dispatch(getMembers()),
});

export const SongContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Song);
