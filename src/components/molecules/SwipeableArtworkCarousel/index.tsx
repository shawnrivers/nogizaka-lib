import * as React from 'react';
import { Swipeable } from 'react-swipeable';
import LazyLoad from 'react-lazyload';
import { CarouselIndicator } from 'components/atoms/CarouselIndicator';
import { ImagePlaceholder } from 'components/atoms/ImagePlaceholder';
import styles from './SwipeableArtworkCarousel.module.scss';

interface ISwipeableArtworkCarouselProps {
  artworks: {
    large: string;
    medium: string;
    small: string;
  }[];
}

export const SwipeableArtworkCarousel = (props: ISwipeableArtworkCarouselProps) => {
  const [artworkIndex, setArtworkIndex] = React.useState(0);

  const goToDirection = (direction: 'left' | 'right') =>
    direction === 'right'
      ? setArtworkIndex(artworkIndex <= props.artworks.length - 2 ? artworkIndex + 1 : artworkIndex)
      : setArtworkIndex(artworkIndex >= 1 ? artworkIndex - 1 : artworkIndex);

  return (
    <>
      <Swipeable
        onSwipedRight={() => goToDirection('left')}
        onSwipedLeft={() => goToDirection('right')}
        preventDefaultTouchmoveEvent={true}
      >
        <div className={styles.wrapper}>
          <div
            className={styles.container}
            style={{
              transition: 'transform 0.5s ease',
              transform: `translateX(${-100 * artworkIndex}vw)`,
            }}
          >
            {props.artworks.map((artwork, index) => (
              <LazyLoad placeholder={<ImagePlaceholder className={styles.artwork} />} key={index}>
                <img
                  className={styles.artwork}
                  src={artwork.small}
                  srcSet={`${artwork.medium} 300w, ${artwork.large} 450w`}
                />
              </LazyLoad>
            ))}
          </div>
        </div>
      </Swipeable>
      <CarouselIndicator count={props.artworks.length} activeIndex={artworkIndex} handleClick={setArtworkIndex} />
    </>
  );
};
