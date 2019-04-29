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
      </main>
    </>
  ) : null;
};
