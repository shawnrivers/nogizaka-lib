import * as React from 'react';
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
    props.currentPage === CdsCurrentPage.Single ? (
      <div className={styles.container}>
        {props.singles.map(single => (
          <CdCard key={CdsCurrentPage.Single + single.number.toString()} cd={single} currentPage={props.currentPage} />
        ))}
      </div>
    ) : (
      <div className={styles.container}>
        {props.albums.map(album => (
          <CdCard key={CdsCurrentPage.Album + album.number.toString()} cd={album} currentPage={props.currentPage} />
        ))}
      </div>
    )
  ) : null;
