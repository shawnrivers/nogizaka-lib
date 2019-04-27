import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './ArtworkCarousel.module.scss';
import { CarouselIndicator } from '../../atoms/CarouselIndicator';

interface IArtworkCarouselProps {
  artworks: string[];
}

export const ArtworkCarousel = (props: IArtworkCarouselProps) => {
  const [artworkIndex, setArtworkIndex] = React.useState(0);

  return (
    <>
      <div className={styles.container}>
        {props.artworks.map((artwork, index) => (
          <CSSTransition
            in={index === artworkIndex}
            timeout={300}
            classNames={{
              enter: styles['enter'],
              enterActive: styles['enter-active'],
              exit: styles['exit'],
              exitActive: styles['exit-active'],
            }}
            unmountOnExit
            key={index}
          >
            <>
              <img className={styles.artwork} src={artwork} />
              <CarouselIndicator count={props.artworks.length} activeIndex={index} />
            </>
          </CSSTransition>
        ))}
      </div>

      <button onClick={() => setArtworkIndex(artworkIndex <= props.artworks.length - 2 ? artworkIndex + 1 : 0)}>
        Change Artwork
      </button>
    </>
  );
};
