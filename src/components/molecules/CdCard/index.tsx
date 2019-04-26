import * as React from 'react';
import styles from './CdCard.module.scss';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { ImagePlaceholder } from '../../atoms/ImagePlaceholder';
import { Link } from 'react-router-dom';
import { CdsCurrentPage } from '../../../utils/constants';

const SMALL_IMAGE_WIDTH = 200;
const MEDIUM_IMAGE_WIDTH = 300;
const LARGE_IMAGE_WIDTH = 450;

interface ICdProps {
  cd: ISingle | IAlbum;
  currentPage: CdsCurrentPage;
}

export const CdCard = (props: ICdProps) => {
  React.useEffect(() => {
    forceCheck();
  }, []);

  const artwork = Object.values(props.cd.artworks)[0];

  return (
    <Link to={`/cds/${props.currentPage}/${props.cd.title}`}>
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
    </Link>
  );
};
