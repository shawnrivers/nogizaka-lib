import * as React from 'react';
import { IAlbum } from 'models/IAlbum';
import { ISingle } from 'models/ISingle';
import { TitleBar } from 'components/molecules/TitleBar';
import { SwipeableArtworkCarousel } from 'components/molecules/SwipeableArtworkCarousel';
import { DetailsCard } from 'components/molecules/DetailsCard';
import { SongCard } from 'components/molecules/SongCard';
import { useScrollRestoration } from 'utils/hooks';
import styles from './Cd.module.scss';

export interface ICdProps {
  cd: ISingle | IAlbum;
}

export const Cd = (props: ICdProps) => {
  const largeArtworks = props.cd ? [...Object.values(props.cd.artworks).map(artwork => artwork.large)] : [];

  useScrollRestoration();

  return props.cd !== undefined ? (
    <>
      <TitleBar title={props.cd.title} />
      <main>
        <SwipeableArtworkCarousel artworks={largeArtworks} />
        <DetailsCard>
          <div className={styles.heading}>
            <span className={styles.title}>{props.cd.title}</span>
            <span className={styles.release}>Release: {props.cd.release}</span>
          </div>
          <div className={styles['song-rows']}>
            {props.cd.songs.map(song => (
              <div className={styles['song-row']} key={song.number}>
                <span className={styles.number}>{song.number}.</span>
                <SongCard
                  artwork={song.artwork}
                  title={song.title}
                  titleKey={song.key}
                  type={song.type}
                  focusPerformers={song.focusPerformers}
                  className={styles['song-card']}
                />
              </div>
            ))}
          </div>
        </DetailsCard>
      </main>
    </>
  ) : null;
};
