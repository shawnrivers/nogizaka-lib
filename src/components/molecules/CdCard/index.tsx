import * as React from 'react';
import styles from './CdCard.module.scss';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { ImagePlaceholder } from '../../atoms/ImagePlaceholder';

const SMALL_IMAGE_WIDTH = 200;
const MEDIUM_IMAGE_WIDTH = 300;
const LARGE_IMAGE_WIDTH = 450;

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
            srcSet={`${artworks.small} ${SMALL_IMAGE_WIDTH * 2}w, ${artworks.medium} ${MEDIUM_IMAGE_WIDTH * 2}w, ${
              artworks.large
            } ${LARGE_IMAGE_WIDTH * 2}w`}
            alt={props.cd.title}
          />
        </div>
      </LazyLoad>
      <div className={styles.text}>
        {props.cd.number}. {props.cd.title}
      </div>
    </div>
  );
};
