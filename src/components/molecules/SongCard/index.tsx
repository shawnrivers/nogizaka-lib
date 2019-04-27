import * as React from 'react';
import { SongType } from '../../../utils/constants';
import { IFocusPerformers } from '../../../models/ICd';
import { convertSongType, getFocusPerformersText } from '../../../utils/strings';
import styles from './SongCard.module.scss';

interface ISongCardProps {
  artwork: string;
  title: string;
  type: SongType;
  focusPerformers: IFocusPerformers;
}

export const SongCard = (props: ISongCardProps) => (
  <div className={styles.container}>
    <img className={styles.artwork} src={props.artwork} />
    <div className={styles.text}>
      <span className={styles.title}>{props.title}</span>
      <div className={styles.description}>
        <span className={styles.type}>#{convertSongType(props.type)}</span>
        <span>{getFocusPerformersText(props.focusPerformers)}</span>
      </div>
    </div>
  </div>
);
