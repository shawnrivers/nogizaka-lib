import * as React from 'react';
import { IAlbum } from '../../../models/IAlbum';
import { ISingle } from '../../../models/ISingle';
import { TitleBar } from '../../molecules/TitleBar';
import { FetchStatus } from '../../../utils/constants';
import styles from './Cd.module.scss';

export type ICdVariableProps = {
  cd: ISingle | IAlbum;
  fetchStatus: FetchStatus;
};

export type ICdFunctionProps = {
  getCds(): void;
};

export interface ICdProps extends ICdVariableProps, ICdFunctionProps {}

export const Cd = (props: ICdProps) => {
  React.useEffect(() => {
    if (props.fetchStatus !== FetchStatus.Fulfilled) {
      props.getCds();
}
  }, []);

  const largeArtworks =
    props.fetchStatus === FetchStatus.Fulfilled
      ? [...Object.values(props.cd.artworks).map(artwork => artwork.large)]
      : [];

  return props.cd !== undefined ? (
    <div>
      <TitleBar title={props.cd.title} />
    </div>
  ) : null;
};
