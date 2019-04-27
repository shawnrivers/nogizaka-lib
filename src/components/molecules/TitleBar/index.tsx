import * as React from 'react';
import styles from './TitleBar.module.scss';
import { BackIcon } from '../../atoms/Icons/BackIcon';

interface ITitleBarProps {
  title: string;
}

export const TitleBar = (props: ITitleBarProps) => (
  <div className={styles.container}>
    <button className={styles.button} onClick={() => window.history.back()}>
      <BackIcon />
    </button>
    <span className={styles.title}>{props.title}</span>
  </div>
);
