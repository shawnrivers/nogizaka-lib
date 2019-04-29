import * as React from 'react';
import { ISong } from '../../../models/ISong';
import { FetchStatus } from '../../../utils/constants';
import styles from './Song.module.scss';

export type ISongVariableProps = {
  song: ISongDisplay | undefined;
  songsFetchStatus: FetchStatus;
  membersFetchStatus: FetchStatus;
};

export type ISongFunctionProps = {
  getSongs(): void;
  getMembers(): void;
};

interface ISongProps extends ISongVariableProps, ISongFunctionProps {}

export const Song = (props: ISongProps) => {
  React.useEffect(() => {
    if (props.songsFetchStatus !== FetchStatus.Fulfilled) {
      props.getSongs();
    }
    if (props.membersFetchStatus !== FetchStatus.Fulfilled) {
      props.getMembers();
    }
  }, []);

  return <div />;
};
