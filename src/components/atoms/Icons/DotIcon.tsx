import * as React from 'react';

interface IDotIconProps {
  className?: string;
}

export const DotIcon = (props: IDotIconProps) => (
  <svg className={props.className} width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);
