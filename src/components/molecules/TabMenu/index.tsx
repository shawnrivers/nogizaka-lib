import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './TabMenu.module.scss';
import { TabButton } from 'components/atoms/Buttons/TabButton';
import { MenuDownIcon } from 'components/atoms/Icons/MenuDownIcon';
import { MenuUpIcon } from 'components/atoms/Icons/MenuUpIcon';
import { useOnClickOutside } from 'utils/hooks';
import { MembersCurrentPage, CdsCurrentPage } from 'utils/constants';

export type TabMenuItem = {
  link: string;
  page: CdsCurrentPage | MembersCurrentPage;
  name: string;
};

interface ITabMenuProps {
  items: TabMenuItem[];
  selectedItem: CdsCurrentPage | MembersCurrentPage;
}

export const TabMenu = (props: ITabMenuProps) => {
  const [isDropdownOpen, toggleDropDown] = React.useState(false);

  const handleToggleDropdown = React.useCallback(() => {
    toggleDropDown(!isDropdownOpen);
  }, [toggleDropDown, isDropdownOpen]);

  const selectedItemName = React.useMemo(() => {
    for (const item of props.items) {
      if (item.page === props.selectedItem) {
        return item.name;
      }
    }

    return 'Please select';
  }, [props.items, props.selectedItem]);

  const dropdownRef = React.useRef(null);

  useOnClickOutside(dropdownRef, () => {
    toggleDropDown(false);
  });

  return (
    <div className={styles.menu} ref={dropdownRef}>
      <button aria-label="Dropdown button" className={styles['toggle-button']} onClick={handleToggleDropdown}>
        <span className={styles['toggle-button-text']}>{selectedItemName}</span>
        {isDropdownOpen ? (
          <div key="menu-up">
            <MenuUpIcon className={styles['toggle-button-icon']} />
          </div>
        ) : (
          <div key="menu-down">
            <MenuDownIcon className={styles['toggle-button-icon']} />
          </div>
        )}
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
          {props.items.map(item => (
            <li key={item.link}>
              <TabButton link={item.link} handleHideDropdown={handleToggleDropdown}>
                {item.name}
              </TabButton>
            </li>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};
