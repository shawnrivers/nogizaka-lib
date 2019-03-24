import * as React from 'react';
import styles from './CdCard.module.scss';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';

interface ICdProps {
  cd: ISingle | IAlbum;
}

export const CdCard = (props: ICdProps) => (
  <div className={styles.container}>
    <img className={styles.artwork} src={props.cd.artworks[0].urls.medium} alt={props.cd.title} />
    <div className={styles.text}>
      <span>
        <span className={styles.number}>{props.cd.number}.</span>
        <span className={styles.title}>{props.cd.title}</span>
      </span>
    </div>
  </div>
);
