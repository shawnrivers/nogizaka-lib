import * as React from 'react';
import styles from './NavigationBar.module.scss';
import { CdIcon } from '../../atoms/Icons/CdIcon';
import { MembersIcon } from '../../atoms/Icons/MembersIcon';
import { SearchIcon } from '../../atoms/Icons/SearchIcon';
import { Link } from 'react-router-dom';

interface INavigationBarProps {
  currentTab: 'cds' | 'members' | 'search';
}

export const NavigationBar = (props: INavigationBarProps) => {
  return (
    <div className={styles.navigation}>
      <Link to="/cds/singles">
        <button aria-label="cds" className={styles['button']}>
          {props.currentTab === 'cds' ? (
            <CdIcon className={styles['cd-icon-active']} isActive={true} />
          ) : (
            <CdIcon className={styles['cd-icon-inactive']} isActive={false} />
          )}
        </button>
      </Link>
      <Link to="/members/first">
        <button aria-label="members" className={styles['button']}>
          {props.currentTab === 'members' ? (
            <MembersIcon className={styles['cd-icon-active']} isActive={true} />
          ) : (
            <MembersIcon className={styles['cd-icon-inactive']} isActive={false} />
          )}
        </button>
      </Link>
      <button aria-label="search" className={styles['button']}>
        {props.currentTab === 'search' ? (
          <SearchIcon className={styles['cd-icon-active']} />
        ) : (
          <SearchIcon className={styles['cd-icon-inactive']} />
        )}
      </button>
    </div>
  );
};
