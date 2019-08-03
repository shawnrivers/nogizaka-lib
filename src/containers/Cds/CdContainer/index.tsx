import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Cd } from 'components/templates/Cd';
import * as CdsSelectors from '../selectors';
import { getSingles, getAlbums } from '../actions';
import { CdsCurrentPage, FetchStatus } from 'utils/constants';
import { arrayToObject } from 'utils/arrays';
import { IRootState } from 'stores/state';
import { useScrollRestoration } from 'utils/hooks';

type MatchParams = {
  type: CdsCurrentPage;
  number: string;
};

export const CdContainer = (ownProps: RouteComponentProps<MatchParams>) => {
  const dispatch = useDispatch();

  const { type, number } = ownProps.match.params;

  const { fetchStatus, cds } = useSelector((state: IRootState) => ({
    fetchStatus:
      type === CdsCurrentPage.Single
        ? CdsSelectors.selectSinglesFetchStatus(state)
        : CdsSelectors.selectAlbumsFetchStatus(state),
    cds: type === CdsCurrentPage.Single ? CdsSelectors.selectSingles(state) : CdsSelectors.selectAlbums(state),
  }));

  const { cd, artworkList } = React.useMemo(() => {
    const cd = arrayToObject(Object.values(cds), 'number')[number];

    return {
      cd,
      artworkList: cd !== undefined ? Object.values(cd.artworks) : [],
    };
  }, [number, cds]);

  React.useEffect(() => {
    if (fetchStatus !== FetchStatus.Fulfilled) {
      if (type === CdsCurrentPage.Single) {
        dispatch(getSingles());
      } else {
        dispatch(getAlbums());
      }
    }
  }, []);

  useScrollRestoration();

  return <Cd cd={cd} cdType={type} artworkList={artworkList} />;
};
