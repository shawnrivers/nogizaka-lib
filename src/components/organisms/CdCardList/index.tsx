import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './CdCardList.module.scss';
import { ISingle } from '../../../models/ISingle';
import { IAlbum } from '../../../models/IAlbum';
import { CdCard } from '../../molecules/CdCard';
import { CdsCurrentPage } from '../../../utils/constants';

interface ICdCardProps {
  singles: ISingle[];
  albums: IAlbum[];
  currentPage: CdsCurrentPage;
}

export const CdCardList = (props: ICdCardProps) => {
  if (props.singles.length !== 0 || props.albums.length !== 0) {
    return (
      <>
        <CSSTransition
          in={props.currentPage === CdsCurrentPage.Single}
          timeout={300}
          classNames={{
            enter: styles['enter'],
            enterActive: styles['enter-active'],
            exit: styles['exit'],
            exitActive: styles['exit-active'],
          }}
          unmountOnExit
        >
          <div className={styles.container}>
            {props.singles.map((single: ISingle) => (
              <CdCard key={CdsCurrentPage.Single + single.number.toString()} cd={single} />
            ))}
          </div>
        </CSSTransition>
        <CSSTransition
          in={props.currentPage === CdsCurrentPage.Album}
          timeout={300}
          classNames={{
            enter: styles['enter'],
            enterActive: styles['enter-active'],
            exit: styles['exit'],
            exitActive: styles['exit-active'],
          }}
          unmountOnExit
        >
          <div className={styles.container}>
            {props.albums.map((album: IAlbum) => (
              <CdCard key={CdsCurrentPage.Album + album.number.toString()} cd={album} />
            ))}
          </div>
        </CSSTransition>
      </>
    );
  } else {
    return null;
  }
};
