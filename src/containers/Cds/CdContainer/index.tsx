import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Cd } from '../../../components/templates/Cd';
import * as CdsSelectors from '../selectors';
import { getSingles, getAlbums } from '../actions';
import { CdsCurrentPage, FetchStatus } from '../../../utils/constants';
import { arrayToObject } from '../../../utils/arrays';
import { IRootState } from 'stores/state';

type MatchParams = {
  type: string;
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

  const cd = React.useMemo(() => {
    return arrayToObject(Object.values(cds), 'number')[number];
  }, [number, cds]);

  const getCds = type === CdsCurrentPage.Single ? getSingles : getAlbums;

  React.useEffect(() => {
    if (fetchStatus !== FetchStatus.Fulfilled) {
      dispatch(getCds());
    }
  }, []);

  return <Cd cd={cd} />;
};
