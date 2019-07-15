import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './TitleBar.module.scss';
import { BackIcon } from 'components/atoms/Icons/BackIcon';

interface ITitleBarProps {
  title: string;
  backTo: string;
}

export const TitleBar = (props: ITitleBarProps) => (
  <nav className={styles.container}>
    {window.history.length < 2 ? (
      <Link className={styles.button} to={props.backTo}>
        <BackIcon className={styles.icon} />
      </Link>
    ) : (
      <button className={styles.button} onClick={() => window.history.back()}>
        <BackIcon className={styles.icon} />
      </button>
    )}
    <span className={styles.title}>{props.title}</span>
  </nav>
);
