import * as React from 'react';
import { ISong } from '../../../models/ISong';
import { FetchStatus } from '../../../utils/constants';
import styles from './Song.module.scss';

export type ISongVariableProps = {
  song: ISongDisplay | undefined;
  song: ISong;
  fetchStatus: FetchStatus;
};

export type ISongFunctionProps = {
  getSongs(): void;
};

interface ISongProps extends ISongVariableProps, ISongFunctionProps {}

export const Song = (props: ISongProps) => {
  React.useEffect(() => {
    if (props.fetchStatus !== FetchStatus.Fulfilled) {
      props.getSongs();
    }
  }, []);

  return <div />;
};
