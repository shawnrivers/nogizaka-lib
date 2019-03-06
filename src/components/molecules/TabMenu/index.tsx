import * as React from 'react';
import posed, { PoseGroup } from 'react-pose';
import styles from './TabMenu.module.scss';
import { TabButton } from '../../atoms/Buttons/TabButton';
import { CdsCurrentPage } from '../../../utils/constants';
import { MenuDownIcon } from '../../atoms/Icons/MenuDownIcon';
import { MenuUpIcon } from '../../atoms/Icons/MenuUpIcon';

const MenuIcon = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const DropDownMenu = posed.div({
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
});

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
          <PoseGroup>
            {isDropdownOpen ? (
              <MenuIcon key="menu-up">
                <MenuUpIcon />
              </MenuIcon>
            ) : (
              <MenuIcon key="menu-down">
                <MenuDownIcon />
              </MenuIcon>
            )}
          </PoseGroup>
        </div>
      </button>
      <PoseGroup>
        {isDropdownOpen && (
          <DropDownMenu key="drop-down-menu" className={styles.dropdown}>
            {props.items.map((item: CdsCurrentPage) => (
              <li key={item}>
                <TabButton handleHideDropdown={handleToggleDropdown}>{item}</TabButton>
              </li>
            ))}
          </DropDownMenu>
        )}
      </PoseGroup>
    </div>
  );
};
