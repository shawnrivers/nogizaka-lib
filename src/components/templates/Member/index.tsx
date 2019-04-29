import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { TitleBar } from '../../molecules/TitleBar';

export type IMemberVariableProps = {
  member: IMember;
  fetchStatus: FetchStatus;
};

export type IMemberFunctionProps = {
  getMembers(): void;
};

interface IMemberProps extends IMemberVariableProps, IMemberFunctionProps {}

export const Member = (props: IMemberProps) => {
  React.useEffect(() => {
    if (props.fetchStatus !== FetchStatus.Fulfilled) {
      props.getMembers();
    }
  }, []);

  return props.member !== undefined ? (
    <>
      <TitleBar title={props.member.nameNotations.lastName + props.member.nameNotations.firstName} />
      <main>
        <div className={styles.background} />
        <LazyLoad>
          <img
            className={styles['profile-image']}
            src={props.member.profileImage.small}
            srcSet={`${props.member.profileImage.small}, ${props.member.profileImage.large} 2x`}
          />
        </LazyLoad>
        <DetailsCard className={styles.card}>
          <div className={styles['first-container']}>
            <span className={styles.name}>
              {props.member.nameNotations.lastName + ' ' + props.member.nameNotations.firstName}
            </span>
            <span className={styles['name-caption']}>
              {props.member.nameNotations.lastNameFurigana + ' ' + props.member.nameNotations.firstNameFurigana} |{' '}
              {props.member.nameNotations.lastNameEn + ' ' + props.member.nameNotations.firstNameEn}
            </span>
            <span className={styles.sites}>
              {props.member.sites.map(site => (
                <a href={site.url} key={site.title} target="_blank">
                  {site.title}
                </a>
              ))}
            </span>
          </div>
          <Divider />
          {props.member.photoAlbums.length > 0 ? (
            <div className={styles['photo-albums-container']}>
              <span className={styles['sub-heading']}>写真集 / Photo Books</span>
              <ol className={styles['photo-album-list']}>
                {props.member.photoAlbums.map(photoAlbum => (
                  <li key={photoAlbum.title} className={styles['photo-album']}>
                    <span>『{photoAlbum.title}』</span>{' '}
                    <span className={styles['photo-album-release']}>({photoAlbum.release})</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          <div className={styles['position-history-container']}>
            <span className={styles['sub-heading']}>Position History</span>
            <div className={styles['position-history']}>
              {Object.values(props.member.positionsHistory).map((position, index) => (
                <div className={styles['position-record']} key={index}>
                  <span className={styles['single-number']}>{toOrdinalNumber(index + 1)}</span>
                  <PositionBadge position={position} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles['position-counter-container']}>
            <span className={styles['sub-heading']}>Position Counter</span>
            <div className={styles['position-indicators']}>
              <div className={styles['position-indicator']}>
                <PositionBadge position={PositionType.Center} />
                <span className={styles['position-indicator-caption']}>Center</span>
              </div>
              <div className={styles['position-indicator']}>
                <PositionBadge position={PositionType.Fukujin} />
                <span className={styles['position-indicator-caption']}>福神</span>
              </div>
              <div className={styles['position-indicator']}>
                <PositionBadge position={PositionType.Selected} />
                <span className={styles['position-indicator-caption']}>選抜</span>
              </div>
              <div className={styles['position-indicator']}>
                <PositionBadge position={PositionType.Under} />
                <span className={styles['position-indicator-caption']}>Under</span>
              </div>
            </div>
            {props.member.positionsCounter.selected + props.member.positionsCounter.under > 0 ? (
              <PositionCounterBar {...props.member.positionsCounter} />
            ) : null}
          </div>
        </DetailsCard>
      </main>
    </>
  ) : null;
};
