import * as React from 'react';
import { ISongDisplay } from '../../../models/ISong';
import { FetchStatus } from '../../../utils/constants';
import { useScrollRestoration } from '../../../utils/hooks';
import { TitleBar } from '../../molecules/TitleBar';
import { ArtworkCarousel } from '../../molecules/ArtworkCarousel';
import { DetailsCard } from '../../molecules/DetailsCard';
import { Divider } from '../../atoms/Divider';
import { MemberCard } from '../../molecules/MemberCard';
import styles from './Song.module.scss';

export type ISongVariableProps = {
  song: ISongDisplay | undefined;
  songsFetchStatus: FetchStatus;
  membersFetchStatus: FetchStatus;
};

export type ISongFunctionProps = {
  getSongs(): void;
  getMembers(): void;
};

interface ISongProps extends ISongVariableProps, ISongFunctionProps {}

export const Song = (props: ISongProps) => {
  React.useEffect(() => {
    if (props.songsFetchStatus !== FetchStatus.Fulfilled) {
      props.getSongs();
    }
    if (props.membersFetchStatus !== FetchStatus.Fulfilled) {
      props.getMembers();
    }
  }, []);

  useScrollRestoration();

  return props.song !== undefined ? (
    <>
      <TitleBar title={props.song.title} />
      <main>
        <ArtworkCarousel artwork={props.song.artwork.large} />
        <DetailsCard className={styles.card}>
          <div className={styles.heading}>
            <span className={styles.title}>{props.song.title}</span>
            <div className={styles.hashtags}>
              <span className={styles.hashtag}>#{props.song.type}</span>
              {props.song.single.title !== '' ? (
                <span className={styles.hashtag}>#{props.song.single.number} Single</span>
              ) : null}
              {props.song.albums.length > 0
                ? props.song.albums.map(album => (
                    <span className={styles.hashtag} key={album.number}>
                      #{album.number} Album
                    </span>
                  ))
                : null}
            </div>
          </div>
          <div className={styles['creators-container']}>
            {props.song.creators.lyrics.length > 0 ? (
              <div className={styles['creator-info']}>
                <span className={styles['creator-title']}>作詞</span>
                <span className={styles['creator-content']}>{props.song.creators.lyrics.join(', ')}</span>
              </div>
            ) : null}

            {props.song.creators.compose.length > 0 ? (
              <div className={styles['creator-info']}>
                <span className={styles['creator-title']}>作曲</span>
                <span className={styles['creator-content']}>{props.song.creators.compose.join(', ')}</span>
              </div>
            ) : null}
            {props.song.creators.arrange.length > 0 ? (
              <div className={styles['creator-info']}>
                <span className={styles['creator-title']}>編曲</span>
                <span className={styles['creator-content']}>{props.song.creators.arrange.join(', ')}</span>
              </div>
            ) : null}
            {props.song.creators.direct.length > 0 ? (
              <div className={styles['creator-info']}>
                <span className={styles['creator-title']}>MV監督</span>
                <span className={styles['creator-content']}>{props.song.creators.direct.join(', ')}</span>
              </div>
            ) : null}
          </div>
          <Divider />
          <div className={styles['performers-container']}>
            <div className={styles['sub-heading']}>
              <span className={styles['sub-heading-text']}>Performers</span>
              {props.song.performersTag !== '' ? (
                <span className={styles['performers-tag']}>#{props.song.performersTag}</span>
              ) : null}
            </div>
            <div className={styles.performers}>
              {props.song.formations.length > 1 ? (
                <div className={styles['row-with-indicator']}>
                  {props.song.formations.map((formation, index) => (
                    <div key={index}>
                      <div className={styles['row-indicator']}>
                        <div className={styles.indicator} />
                        <div className={styles['row-number']}>{index + 1}列目</div>
                      </div>
                      <div className={styles.row}>
                        {formation.map(member => (
                          <MemberCard
                            name={member.name}
                            displayName={member.displayName}
                            profileImage={member.profileImage}
                            position={member.position}
                            key={member.name}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className={styles['row-indicator']}>
                    <div className={styles.indicator} />
                  </div>
                </div>
              ) : (
                <div className={styles['row-no-indicator']}>
                  {props.song.formations[0].map(member => (
                    <MemberCard
                      name={member.name}
                      displayName={member.displayName}
                      profileImage={member.profileImage}
                      position={member.position}
                      key={member.name}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </DetailsCard>
      </main>
    </>
  ) : null;
};
