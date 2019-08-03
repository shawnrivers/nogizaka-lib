import * as React from 'react';
import styles from './CdCard.module.scss';
import { ISingle } from 'models/ISingle';
import { IAlbum } from 'models/IAlbum';
import LazyLoad from 'react-lazyload';
import { ImagePlaceholder } from 'components/atoms/ImagePlaceholder';
import { Link } from 'react-router-dom';
import { CdsCurrentPage } from 'utils/constants';

const SMALL_IMAGE_WIDTH = 200;
const MEDIUM_IMAGE_WIDTH = 300;
const LARGE_IMAGE_WIDTH = 450;

interface ICdProps {
  cd: ISingle | IAlbum;
  currentPage: CdsCurrentPage;
}

export const CdCard = (props: ICdProps) => {
  const artwork = Object.values(props.cd.artworks)[0];

  return (
    <Link to={`/cds/${props.currentPage}/${props.cd.number}`} aria-label={props.cd.title}>
      <div className={styles.container}>
        <LazyLoad placeholder={<ImagePlaceholder />}>
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
      </div>
    </Link>
  );
};
