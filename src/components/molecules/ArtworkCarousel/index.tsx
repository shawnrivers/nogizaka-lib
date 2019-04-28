import * as React from 'react';
import { Swipeable } from 'react-swipeable';
import LazyLoad from 'react-lazyload';
import { CarouselIndicator } from '../../atoms/CarouselIndicator';
import { ImagePlaceholder } from '../../atoms/ImagePlaceholder';
import styles from './ArtworkCarousel.module.scss';

interface IArtworkCarouselProps {
  artworks: string[];
}

export const ArtworkCarousel = (props: IArtworkCarouselProps) => {
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
              <LazyLoad placeholder={<ImagePlaceholder />} key={index}>
                <img className={styles.artwork} src={artwork} />
              </LazyLoad>
            ))}
          </div>
        </div>
      </Swipeable>
      <CarouselIndicator count={props.artworks.length} activeIndex={artworkIndex} handleClick={setArtworkIndex} />
    </>
  );
};
