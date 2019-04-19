import * as React from 'react';
import styles from './NavigationBar.module.scss';
import { CdIcon } from '../../atoms/Icons/CdIcon';
import { MembersIcon } from '../../atoms/Icons/MembersIcon';
import { SearchIcon } from '../../atoms/Icons/SearchIcon';

interface INavigationBarProps {
  currentTab: 'cds' | 'members' | 'search';
}

export const NavigationBar = (props: INavigationBarProps) => {
  return (
    <div className={styles.navigation}>
      <button className={styles['button']}>
        {props.currentTab === 'cds' ? (
          <CdIcon className={styles['cd-icon-active']} isActive={true} />
        ) : (
          <CdIcon className={styles['cd-icon-inactive']} isActive={false} />
        )}
      </button>
      <button className={styles['button']}>
        {props.currentTab === 'members' ? (
          <MembersIcon className={styles['cd-icon-active']} isActive={true} />
        ) : (
          <MembersIcon className={styles['cd-icon-inactive']} isActive={false} />
        )}
      </button>
      <button className={styles['button']}>
        {props.currentTab === 'search' ? (
          <SearchIcon className={styles['cd-icon-active']} />
        ) : (
          <SearchIcon className={styles['cd-icon-inactive']} />
        )}
      </button>
    </div>
  );
};
