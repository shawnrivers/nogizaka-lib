import * as React from 'react';
import LazyLoad from 'react-lazyload';
import styles from './ArtworkCarousel.module.scss';
import { ImagePlaceholder } from 'components/atoms/ImagePlaceholder';

interface IArtworkCarouselProps {
  artwork: string;
}

export const ArtworkCarousel = (props: IArtworkCarouselProps) => (
  <div className={styles.container}>
    <LazyLoad placeholder={<ImagePlaceholder className={styles.artwork} />}>
      <img className={styles.artwork} src={props.artwork} />
    </LazyLoad>
  </div>
);
