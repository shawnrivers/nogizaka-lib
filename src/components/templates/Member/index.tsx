import * as React from 'react';
import LazyLoad from 'react-lazyload';
import { IMemberDisplay } from '../../../models/IMember';
import { FetchStatus, PositionType, GlowStickColorType, GlowStickColors } from '../../../utils/constants';
import { TitleBar } from '../../molecules/TitleBar';
import { DetailsCard } from '../../molecules/DetailsCard';
import { Divider } from '../../atoms/Divider';
import { toOrdinalNumber } from '../../../utils/strings';
import { PositionBadge } from '../../atoms/PositionBadge';
import { PositionCounterBar } from '../../atoms/PositionCounterBar';
import { ImagePlaceholder } from '../../atoms/ImagePlaceholder';
import { useScrollRestoration } from '../../../utils/hooks';
import styles from './Member.module.scss';

const GlowStickColorBackground = (props: {
  colors: {
    left: string;
    right: string;
  };
}) => {
  return (
    <div
      className={styles.background}
      style={{
        background: `linear-gradient(90deg, ${props.colors.left}, ${props.colors.right})`,
      }}
    />
  );
};

export type IMemberVariableProps = {
  member: IMemberDisplay | undefined;
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

  useScrollRestoration();

  return props.member !== undefined ? (
    <>
      <TitleBar title={props.member.nameNotations.lastName + props.member.nameNotations.firstName} />
      <main>
        <GlowStickColorBackground colors={props.member.glowStickColor} />
        <LazyLoad>
          <img
            className={styles['profile-image']}
            src={props.member.mainImage.small}
            srcSet={`${props.member.mainImage.small}, ${props.member.mainImage.large} 2x`}
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
          <div className={styles['second-container']}>
            <div className={styles['info-item']}>
              <span className={styles['info-item-title']}>加入</span>
              <span className={styles['info-item-content']}>{props.member.join}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-item-title']}>誕生日</span>
              <span className={styles['info-item-content']}>{props.member.birthday}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-item-title']}>身長</span>
              <span className={styles['info-item-content']}>{props.member.height}cm</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-item-title']}>血液型</span>
              <span className={`${styles['info-item-content']} ${styles['blood-type']}`}>{props.member.bloodType}</span>
            </div>
            <div className={styles['info-item']}>
              <span className={styles['info-item-title']}>出身</span>
              <span className={styles['info-item-content']}>{props.member.origin}</span>
            </div>
            {props.member.units.length > 0 ? (
              <div className={styles['info-item']}>
                <span className={styles['info-item-title']}>Units</span>
                <span className={`${styles['info-item-content']} ${styles['blood-type']}`}>
                  {props.member.units.join(', ')}
                </span>
              </div>
            ) : null}
            {props.member.corps.length > 0 ? (
              <div className={styles['info-item']}>
                <span className={styles['info-item-title']}>軍団</span>
                <span className={`${styles['info-item-content']} ${styles['blood-type']}`}>
                  {props.member.corps.join(', ')}
                </span>
              </div>
            ) : null}
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
          {props.member.positionsHistory.length > 0 ? (
            <div className={styles['position-history-container']}>
              <span className={styles['sub-heading']}>Position History</span>
              <div className={styles['position-history']}>
                {props.member.positionsHistory.map((positionRecord, index) => (
                  <div className={styles['position-record']} key={index}>
                    <span className={styles['single-number']}>{toOrdinalNumber(positionRecord.singleNumber)}</span>
                    <PositionBadge position={positionRecord.position} />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {props.member.positionsCounter.center +
            props.member.positionsCounter.fukujin +
            props.member.positionsCounter.selected +
            props.member.positionsCounter.under >
          0 ? (
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
          ) : null}
          {props.member.profileImages !== undefined ? (
            <div className={styles['gallery-container']}>
              <span className={styles['sub-heading']}>Gallery</span>
              <div className={styles['gallery']}>
                {props.member.profileImages.map((image, index) => (
                  <LazyLoad key={index} placeholder={<ImagePlaceholder aspectRadio={1.206896552} />}>
                    <img className={styles['gallery-image']} src={image.small} />
                  </LazyLoad>
                ))}
              </div>
            </div>
          ) : null}
        </DetailsCard>
      </main>
    </>
  ) : null;
};
