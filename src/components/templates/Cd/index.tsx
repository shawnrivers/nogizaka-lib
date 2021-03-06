import * as React from 'react';
import { IAlbum } from 'models/IAlbum';
import { ISingle } from 'models/ISingle';
import { TitleBar } from 'components/molecules/TitleBar';
import { SwipeableArtworkCarousel } from 'components/molecules/SwipeableArtworkCarousel';
import { DetailsCard } from 'components/molecules/DetailsCard';
import { SongCard } from 'components/molecules/SongCard';
import styles from './Cd.module.scss';
import { CdsCurrentPage } from 'utils/constants';

interface ICdProps {
  cd: ISingle | IAlbum | undefined;
  cdType: CdsCurrentPage;
  artworkList: {
    large: string;
    medium: string;
    small: string;
  }[];
}

export const Cd = (props: ICdProps) =>
  props.cd !== undefined ? (
    <>
      <TitleBar title={props.cd.title} backTo={`/cds/${props.cdType}`} />
      <main>
        <SwipeableArtworkCarousel artworks={props.artworkList} />
        <div className={styles.details}>
          <DetailsCard hasBackground={true}>
            <div className={styles.heading}>
              <span className={styles.title}>{props.cd.title}</span>
              <span className={styles.release}>Release: {props.cd.release}</span>
            </div>
            <div className={styles['song-rows']}>
              {props.cd.songs.map(song => (
                <div className={styles['song-row']} key={song.number}>
                  <SongCard
                    number={song.number}
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
        </div>
      </main>
    </>
  ) : null;
