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
  }, []);

  const artwork = React.useMemo(() => {
    const artworks = props.cd.artworks;
    const keys = Object.keys(artworks);
    return artworks[keys[0]];
  }, [props.cd.artworks]);

  return (
    <div className={styles.container}>
      <LazyLoad placeholder={<ImagePlaceholder />} offset={100}>
        <div className={styles['artwork-container']}>
          <img
            className={styles.artwork}
            src={artwork.medium}
            srcSet={`${artwork.small} ${SMALL_IMAGE_WIDTH * 2}w, ${artwork.medium} ${MEDIUM_IMAGE_WIDTH * 2}w, ${
              artwork.large
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
