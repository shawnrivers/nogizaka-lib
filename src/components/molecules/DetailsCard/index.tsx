import * as React from 'react';
import styles from './DetailsCard.module.scss';

interface IDetailsCardProps {
  children: React.ReactNode;
  className?: string;
  hasBackground?: boolean;
}

export const DetailsCard = (props: IDetailsCardProps) => (
  <div
    className={`${props.hasBackground ? styles['container-with-background'] : styles['container-without-background']} ${
      props.className
    }`}
  >
    {props.children}
  </div>
);
