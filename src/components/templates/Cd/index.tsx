import * as React from 'react';
import { IAlbum } from '../../../models/IAlbum';
import { ISingle } from '../../../models/ISingle';
import styles from './Cd.module.scss';

export interface ICdProps {
  cd: ISingle | IAlbum;
}

export const Cd = (props: ICdProps) => {
  console.log(props);
  return <div />;
};
