import * as React from 'react';
import styles from './DetailsCard.module.scss';

interface IDetailsCardProps {
  children: React.ReactNode;
}

export const DetailsCard = (props: IDetailsCardProps) => <div className={styles.container}>{props.children}</div>;
