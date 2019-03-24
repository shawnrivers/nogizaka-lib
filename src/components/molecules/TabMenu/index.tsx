import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './TabMenu.module.scss';
import { TabButton } from '../../atoms/Buttons/TabButton';
import { CdsCurrentPage } from '../../../utils/constants';
import { MenuDownIcon } from '../../atoms/Icons/MenuDownIcon';
import { MenuUpIcon } from '../../atoms/Icons/MenuUpIcon';
interface ITabMenuProps {
  items: CdsCurrentPage[];
  currentPage: CdsCurrentPage;
}

export const TabMenu = (props: ITabMenuProps) => {
  const [isDropdownOpen, toggleDropDown] = React.useState(false);

  const handleToggleDropdown = React.useCallback(() => {
    toggleDropDown(!isDropdownOpen);
  }, [toggleDropDown, isDropdownOpen]);

  return (
    <div className={styles.menu}>
      <button className={styles['toggle-button']} onClick={handleToggleDropdown}>
        <span className={styles['toggle-button-text']}>{props.currentPage}</span>
        <div className={styles['toggle-button-icon']}>
          {isDropdownOpen ? (
            <div key="menu-up">
              <MenuUpIcon />
            </div>
          ) : (
            <div key="menu-down">
              <MenuDownIcon />
            </div>
          )}
        </div>
      </button>
      <CSSTransition
        in={isDropdownOpen}
        timeout={200}
        classNames={{
          enter: styles['enter'],
          enterActive: styles['enter-active'],
          exit: styles['exit'],
          exitActive: styles['exit-active'],
        }}
        unmountOnExit
      >
        <div className={styles.dropdown}>
          {props.items.map((item: CdsCurrentPage) => (
            <li key={item}>
              <TabButton handleHideDropdown={handleToggleDropdown}>{item}</TabButton>
            </li>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};
