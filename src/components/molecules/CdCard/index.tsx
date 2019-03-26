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

  return (
    <div className={styles.container}>
      <LazyLoad placeholder={<ImagePlaceholder />} offset={100}>
          <img className={styles.artwork} src={props.cd.artworks[0].urls.medium} alt={props.cd.title} />
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
