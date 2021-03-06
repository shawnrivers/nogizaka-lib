import * as React from 'react';
import styles from './NavigationBar.module.scss';
import { CdIcon } from 'components/atoms/Icons/CdIcon';
import { MembersIcon } from 'components/atoms/Icons/MembersIcon';
import { SearchIcon } from 'components/atoms/Icons/SearchIcon';
import { Link } from 'react-router-dom';

interface INavigationBarProps {
  currentTab: 'cds' | 'members';
}

export const NavigationBar = (props: INavigationBarProps) => {
  return (
    <nav className={styles.container}>
      <Link to="/cds/singles">
        <button aria-label="cds" className={styles['button']}>
          {props.currentTab === 'cds' ? (
            <>
              <CdIcon className={styles['icon-active']} isActive={true} />
              <span className={styles['text-active']}>CDs</span>
            </>
          ) : (
            <>
              <CdIcon className={styles['icon-inactive']} isActive={false} />
              <span className={styles['text-inactive']}>CDs</span>
            </>
          )}
        </button>
      </Link>
      <Link to="/members/first">
        <button aria-label="members" className={styles['button']}>
          {props.currentTab === 'members' ? (
            <>
              <MembersIcon className={styles['icon-active']} isActive={true} />
              <span className={styles['text-active']}>Members</span>
            </>
          ) : (
            <>
              <MembersIcon className={styles['icon-inactive']} isActive={false} />
              <span className={styles['text-inactive']}>Members</span>
            </>
          )}
        </button>
      </Link>
    </nav>
  );
};
