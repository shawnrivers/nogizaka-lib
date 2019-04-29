import * as React from 'react';
import styles from './DetailsCard.module.scss';

interface IDetailsCardProps {
  children: React.ReactNode;
  className?: string;
}

export const DetailsCard = (props: IDetailsCardProps) => (
  <div className={`${styles.container} ${props.className}`}>{props.children}</div>
);
