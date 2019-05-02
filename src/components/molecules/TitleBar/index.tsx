import * as React from 'react';
import styles from './TitleBar.module.scss';
import { BackIcon } from '../../atoms/Icons/BackIcon';

interface ITitleBarProps {
  title: string;
}

export const TitleBar = (props: ITitleBarProps) => (
  <nav className={styles.container}>
    <button className={styles.button} onClick={() => window.history.back()}>
      <BackIcon className={styles.icon} />
    </button>
    <span className={styles.title}>{props.title}</span>
  </nav>
);
