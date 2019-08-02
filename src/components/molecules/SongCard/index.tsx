import * as React from 'react';
import { Link } from 'react-router-dom';
import { SongType } from 'utils/constants';
import { IFocusPerformers } from 'models/ICd';
import { convertSongType, getFocusPerformersText } from 'utils/strings';
import styles from './SongCard.module.scss';

export interface ISongCardProps {
  number: number;
  title: string;
  titleKey: string;
  type: SongType;
  focusPerformers: IFocusPerformers;
  className?: string;
}

export const SongCard = (props: ISongCardProps) =>
  props.titleKey !== 'OVERTURE' ? (
    <Link to={`/song/${props.titleKey}`} className={`${styles.container} ${props.className}`}>
      <div className={styles.number}>
        <span>{props.number}.</span>
      </div>
      <div className={styles.text}>
        <span className={styles.title}>{props.title}</span>
        <div className={styles.description}>
          <span className={styles.type}>#{convertSongType(props.type)}</span>
          <span>{getFocusPerformersText(props.focusPerformers)}</span>
        </div>
      </div>
    </Link>
  ) : (
    <div className={`${styles.container} ${props.className}`}>
      <div className={styles.number}>
        <span>{props.number}.</span>
      </div>
      <div className={styles.text}>
        <span className={styles.title}>{props.title}</span>
        <div className={styles.description}>
          <span className={styles.type}>#{convertSongType(props.type)}</span>
          <span>{getFocusPerformersText(props.focusPerformers)}</span>
        </div>
      </div>
    </div>
  );
