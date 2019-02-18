import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './TabButton.module.scss';
import { CdsCurrentPage } from '../../../../utils/constants';

type ITabButtonProps = {
  children: CdsCurrentPage;
  handleHideDropdown(): void;
};

export const TabButton = (props: ITabButtonProps) => (
  <Link to={`/cds/${props.children}`}>
    <button className={styles.button} onClick={props.handleHideDropdown}>
      {props.children}
    </button>
  </Link>
);
