import * as React from 'react';
import { SongType } from '../../../utils/constants';
import { IFocusPerformers } from '../../../models/ICd';
import { convertSongType, getFocusPerformersText } from '../../../utils/strings';
import styles from './SongCard.module.scss';
import LazyLoad from 'react-lazyload';
import { ImagePlaceholder } from '../../atoms/ImagePlaceholder';

interface ISongCardProps {
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
  title: string;
  type: SongType;
  focusPerformers: IFocusPerformers;
}

export const SongCard = (props: ISongCardProps) => (
  <div className={styles.container}>
    <LazyLoad placeholder={<ImagePlaceholder width={100} height={100} />}>
      <img
        className={styles.artwork}
        src={props.artwork.small}
        srcSet={`${props.artwork.small} 2x, ${props.artwork.medium} 3x`}
      />
    </LazyLoad>
    <div className={styles.text}>
      <span className={styles.title}>{props.title}</span>
      <div className={styles.description}>
        <span className={styles.type}>#{convertSongType(props.type)}</span>
        <span>{getFocusPerformersText(props.focusPerformers)}</span>
      </div>
    </div>
  </div>
);
