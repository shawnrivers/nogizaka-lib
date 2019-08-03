import * as React from 'react';
import LazyLoad from 'react-lazyload';
import styles from './ArtworkCarousel.module.scss';
import { ImagePlaceholder } from 'components/atoms/ImagePlaceholder';

interface IArtworkCarouselProps {
  artwork: {
    large: string;
    medium: string;
    small: string;
  };
}

export const ArtworkCarousel = (props: IArtworkCarouselProps) => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <LazyLoad placeholder={<ImagePlaceholder className={styles.artwork} />}>
        <img
          className={styles.artwork}
          src={props.artwork.small}
          srcSet={`${props.artwork.medium} 300w, ${props.artwork.large} 450w`}
        />
      </LazyLoad>
    </div>
  </div>
);
