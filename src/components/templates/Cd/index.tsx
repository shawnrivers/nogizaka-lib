import * as React from 'react';
import { IAlbum } from '../../../models/IAlbum';
import { ISingle } from '../../../models/ISingle';
import { TitleBar } from '../../molecules/TitleBar';
import { FetchStatus } from '../../../utils/constants';
import { ArtworkCarousel } from '../../molecules/ArtworkCarousel';
import styles from './Cd.module.scss';
import { DetailsCard } from '../../molecules/DetailsCard';
import { SongCard } from '../../molecules/SongCard';

export type ICdVariableProps = {
  cd: ISingle | IAlbum;
  fetchStatus: FetchStatus;
};

export type ICdFunctionProps = {
  getCds(): void;
};

export interface ICdProps extends ICdVariableProps, ICdFunctionProps {}

export const Cd = (props: ICdProps) => {
  React.useEffect(() => {
    if (props.fetchStatus !== FetchStatus.Fulfilled) {
      props.getCds();
    }
  }, []);

  const largeArtworks =
    props.fetchStatus === FetchStatus.Fulfilled
      ? [...Object.values(props.cd.artworks).map(artwork => artwork.large)]
      : [];

  return props.cd !== undefined ? (
    <>
      <TitleBar title={props.cd.title} />
      <main>
        <ArtworkCarousel artworks={largeArtworks} />
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
                  type={song.type}
                  focusPerformers={song.focusPerformers}
                />
              </div>
            ))}
          </div>
        </DetailsCard>
      </main>
    </>
  ) : null;
};
