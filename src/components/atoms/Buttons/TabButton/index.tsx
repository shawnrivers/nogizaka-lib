import * as React from "react";
import styles from "./TabButton.module.scss";
import { CdsCurrentPage } from "../../../../utils/constants";

type ITabButtonProps = {
  children: CdsCurrentPage;
  handleClickTab(choice: string): void;
  handleHideDropdown(): void;
};

export const TabButton = (props: ITabButtonProps) => (
  <button
    className={styles.button}
    onClick={() => {
      props.handleClickTab(props.children);
      props.handleHideDropdown();
    }}
  >
    {props.children}
  </button>
);
