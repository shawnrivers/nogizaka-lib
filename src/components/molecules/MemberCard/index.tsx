import * as React from 'react';
import styles from './MemberCard.module.scss';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { ImagePlaceholder } from '../../atoms/ImagePlaceholder';
import { ProfileImage } from '../../../models/IMember';
import { Link } from 'react-router-dom';
import { PositionType } from '../../../utils/constants';

const SMALL_PROFILE_IMAGE_WIDTH = 150;
const LARGE_PROFILE_IMAGE_WIDTH = 250;

const Badge = (props: { position: PositionType }) => {
  if (props.position === undefined) {
    return null;
  }

  let text = '';

  switch (props.position) {
    case PositionType.Center:
      text = 'C';
      break;
    case PositionType.Fukujin:
      text = 'F';
      break;
    default:
      break;
  }

  return text !== '' ? (
    <div className={text === 'C' ? styles['center-badge'] : styles['fukujin-badge']}>{text}</div>
  ) : null;
};

interface IMemberCardProps {
  name: string;
  displayName: string;
  profileImage: ProfileImage;
  position?: PositionType;
}

export const MemberCard = (props: IMemberCardProps) => {
  React.useEffect(() => {
    forceCheck();
  }, []);

  return (
    <Link to={`/member/${props.name}`}>
      <div className={styles.container}>
        {props.position !== undefined ? <Badge position={props.position} /> : null}
        <LazyLoad placeholder={<ImagePlaceholder />}>
          <div className={styles['profile-image-container']}>
            <img
              className={styles['profile-image']}
              src={props.profileImage.large}
              srcSet={`${props.profileImage.small} ${SMALL_PROFILE_IMAGE_WIDTH * 3}w, ${
                props.profileImage.large
              } ${LARGE_PROFILE_IMAGE_WIDTH * 3}w`}
              alt={props.displayName}
            />
          </div>
        </LazyLoad>
        <div className={styles.text}>{props.displayName}</div>
      </div>
    </Link>
  );
};
