import * as React from 'react';
import styles from './MemberCard.module.scss';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { ImagePlaceholder } from '../../atoms/ImagePlaceholder';
import { ProfileImage } from '../../../models/IMember';
import { Link } from 'react-router-dom';

const SMALL_PROFILE_IMAGE_WIDTH = 150;
const LARGE_PROFILE_IMAGE_WIDTH = 250;

interface IMemberCardProps {
  name: string;
  displayName: string;
  profileImage: ProfileImage;
}

export const MemberCard = (props: IMemberCardProps) => {
  React.useEffect(() => {
    forceCheck();
  }, []);

  return (
    <Link to={`/member/${props.name}`}>
      <div className={styles.container}>
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
