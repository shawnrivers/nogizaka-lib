import * as React from 'react';
import styles from './CarouselIndicator.module.scss';
import { DotIcon } from '../Icons/DotIcon';

interface IImageGalleryIndicatorProps {
  count: number;
  activeIndex: number;
}

export const CarouselIndicator = (props: IImageGalleryIndicatorProps) => {
  const dots = [];

  for (let i = 0; i < props.count; i++) {
    dots.push(<DotIcon className={props.activeIndex === i ? styles.active : styles.inactive} key={i} />);
  }

  return <div className={styles.container}>{dots}</div>;
};
