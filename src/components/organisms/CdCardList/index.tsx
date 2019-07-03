import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ISingle } from 'models/ISingle';
import { IAlbum } from 'models/IAlbum';
import { CdCard } from 'components/molecules/CdCard';
import { CdsCurrentPage } from 'utils/constants';
import styles from './CdCardList.module.scss';

interface ICdCardProps {
  singles: ISingle[];
  albums: IAlbum[];
  currentPage: CdsCurrentPage;
}

export const CdCardList = (props: ICdCardProps) =>
  props.singles.length !== 0 || props.albums.length !== 0 ? (
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
          {props.singles.map(single => (
            <CdCard
              key={CdsCurrentPage.Single + single.number.toString()}
              cd={single}
              currentPage={props.currentPage}
            />
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
          {props.albums.map(album => (
            <CdCard key={CdsCurrentPage.Album + album.number.toString()} cd={album} currentPage={props.currentPage} />
          ))}
        </div>
      </CSSTransition>
    </>
  ) : null;
