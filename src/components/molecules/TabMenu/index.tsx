import React, { useState } from "react";
import styles from "./TabMenu.module.scss";
import { TabButton } from "../../atoms/Buttons/TabButton";
import { CdsCurrentPage } from "../../../utils/constants";
import { MenuDownIcon } from "../../atoms/Icons/MenuDownIcon";
import { MenuUpIcon } from "../../atoms/Icons/MenuUpIcon";



type ITabMenuProps = {
  items: CdsCurrentPage[];
  currentPage: CdsCurrentPage;
  handleClickItem(choice: CdsCurrentPage): void;
};

export const TabMenu = (props: ITabMenuProps) => {
  const [isDropdownOpen, toggleDropDown] = useState(false);

  const handleToggleDropdown = () => {
    setTimeout(() => toggleDropDown(!isDropdownOpen), 40);
  };

  return (
    <div className={styles.menu}>
      <button
        className={styles["toggle-button"]}
        onClick={handleToggleDropdown}
      >
        <span className={styles["toggle-button-text"]}>
          {props.currentPage}
        </span>
        <div className={styles["toggle-button-icon"]}>
          {isDropdownOpen ? <MenuUpIcon /> : <MenuDownIcon />}
        </div>
      </button>
      {isDropdownOpen ? (
        <ul
          className={styles.dropdown}
          tabIndex={1}
          onBlur={handleToggleDropdown}
        >
          {props.items.map((item: CdsCurrentPage) => (
            <li>
              <TabButton
                handleClickTab={props.handleClickItem}
                handleHideDropdown={handleToggleDropdown}
              >
                {item}
              </TabButton>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
