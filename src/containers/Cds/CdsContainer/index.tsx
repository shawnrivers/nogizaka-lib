import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cds } from '../../../components/templates/Cds';
import { getSingles, getAlbums } from '../actions';
import * as CdsSelectors from '../selectors';
import { RouteComponentProps } from 'react-router';
import { CdsCurrentPage, FetchStatus } from '../../../utils/constants';
import { IRootState } from 'stores/state';

type MatchParams = {
  type: CdsCurrentPage;
};

export const CdsContainer = (ownProps: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();

  const { singlesFetchStatus, albumsFetchStatus, singles, albums } = useSelector((state: IRootState) => ({
    singlesFetchStatus: CdsSelectors.selectSinglesFetchStatus(state),
    albumsFetchStatus: CdsSelectors.selectAlbumsFetchStatus(state),
    singles: CdsSelectors.selectSingleArray(state),
    albums: CdsSelectors.selectAlbumArray(state),
  }));

  React.useEffect(() => {
    if (singlesFetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getSingles());
    }
    if (albumsFetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getAlbums());
    }
  }, []);

  return <Cds currentLocation={ownProps.match.params.type} singles={singles} albums={albums} />;
};
