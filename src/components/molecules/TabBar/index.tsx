import * as React from 'react';
import styles from './TabBar.module.scss';
import { Link } from 'react-router-dom';
import { CdsCurrentPage, MembersCurrentPage } from 'utils/constants';

export type TabItem = {
  link: string;
  page: CdsCurrentPage | MembersCurrentPage;
  name: string;
};

interface ITabBarProps {
  items: TabItem[];
  selectedItem: CdsCurrentPage | MembersCurrentPage;
}

export const TabBar = (props: ITabBarProps) => {
  const getTabItemClassName = React.useCallback(
    (page: CdsCurrentPage | MembersCurrentPage) =>
      page === props.selectedItem ? `${styles.text} ${styles.selected}` : styles.text,
    [props.selectedItem, styles],
  );

  return (
    <div className={styles.container}>
      {props.items.map(item => (
        <Link to={item.link} key={item.name} className={getTabItemClassName(item.page)}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};
