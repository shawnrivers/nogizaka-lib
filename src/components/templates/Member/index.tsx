import * as React from 'react';
import { IMember } from '../../../models/IMember';
import { FetchStatus } from '../../../utils/constants';
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
    </>
  ) : null;
};
