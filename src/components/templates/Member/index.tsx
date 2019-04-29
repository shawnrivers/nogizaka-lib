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
        </DetailsCard>
      </main>
    </>
  ) : null;
};
