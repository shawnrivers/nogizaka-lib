import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IRootState } from 'stores/state';
import { Song } from 'components/templates/Song';
import * as SongsSelectors from '../selectors';
import * as MembersSelectors from 'containers/Members/selectors';
import { getSongs } from '../actions';
import { getMembers } from 'containers/Members/actions';
import { FetchStatus } from 'utils/constants';
import { useScrollRestoration } from 'utils/hooks';

type MatchParams = {
  key: string;
};

export const SongContainer = (ownProps: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();

  const { key } = ownProps.match.params;

  const { songsFetchStatus, membersFetchStatus, songs, members } = useSelector((state: IRootState) => ({
    songsFetchStatus: SongsSelectors.selectSongsFetchStatus(state),
    membersFetchStatus: MembersSelectors.selectMembersFetchStatus(state),
    songs: SongsSelectors.selectSongs(state),
    members: MembersSelectors.selectMembers(state),
  }));

  const { song, backTo } = React.useMemo(() => {
    const { songCdNumber, songCdType } = SongsSelectors.selectSongCd(songs[key]);
    const backTo = songCdType !== '' && songCdNumber !== '' ? `/cds/${songCdType}/${songCdNumber}` : '/cds';
    const song = SongsSelectors.convertSongForDisplay(songs[key], members);

    return { song, backTo };
  }, [songs, key, members]);

  React.useEffect(() => {
    if (songsFetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getSongs());
    }
    if (membersFetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getMembers());
    }
  }, []);

  useScrollRestoration();

  return <Song song={song} backTo={backTo} />;
};
