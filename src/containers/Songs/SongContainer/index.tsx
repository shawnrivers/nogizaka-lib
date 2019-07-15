import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IRootState } from 'stores/state';
import { Song, ISongProps } from 'components/templates/Song';
import * as SongsSelectors from '../selectors';
import * as MembersSelectors from 'containers/Members/selectors';
import { getSongs } from '../actions';
import { getMembers } from 'containers/Members/actions';
import { FetchStatus } from 'utils/constants';

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

  const songProps: ISongProps = React.useMemo(() => {
    const { songCdNumber, songCdType } = SongsSelectors.selectSongCd(songs[key]);
    return { song: SongsSelectors.convertSongForDisplay(songs[key], members), songCdNumber, songCdType };
  }, [songs, key, members]);

  React.useEffect(() => {
    if (songsFetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getSongs());
    }
    if (membersFetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getMembers());
    }
  }, []);

  return <Song {...songProps} />;
};
