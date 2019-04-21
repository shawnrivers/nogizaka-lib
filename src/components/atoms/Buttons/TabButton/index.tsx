import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './TabButton.module.scss';

interface ITabButtonProps {
  link: string;
  children: string;
  handleHideDropdown(): void;
}

export const TabButton = (props: ITabButtonProps) => (
  <Link to={props.link}>
    <button className={styles.button} onClick={props.handleHideDropdown}>
      {props.children}
    </button>
  </Link>
);
