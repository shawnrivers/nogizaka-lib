import * as React from 'react';

interface IMenuUpIconProps {
  className?: string;
}

export const MenuUpIcon = (props: IMenuUpIconProps) => (
  <svg className={props.className} width="24" height="24" viewBox="0 0 24 24">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
