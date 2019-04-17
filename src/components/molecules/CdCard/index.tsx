import * as React from 'react';
import styles from './CdCard.module.scss';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { ImagePlaceholder } from '../../atoms/ImagePlaceholder';

interface ICdProps {
  cd: ISingle | IAlbum;
}

export const CdCard = (props: ICdProps) => {
  React.useEffect(() => {
    forceCheck();
  });

  const artworks = {
    small: props.cd.artworks[0].urls.small,
    medium: props.cd.artworks[0].urls.medium,
    large: props.cd.artworks[0].urls.large,
  };

  return (
    <div className={styles.container}>
      <LazyLoad placeholder={<ImagePlaceholder />} offset={100}>
        <div className={styles['artwork-container']}>
          <img
            className={styles.artwork}
            src={artworks.medium}
            srcSet={`${artworks.small} 400w, ${artworks.medium} 600w, ${artworks.large} 900w`}
            alt={props.cd.title}
          />
        </div>
      </LazyLoad>
      <div className={styles.text}>
        <span>
          <span className={styles.number}>{props.cd.number}.</span>
          <span className={styles.title}>{props.cd.title}</span>
        </span>
      </div>
    </div>
  );
};
