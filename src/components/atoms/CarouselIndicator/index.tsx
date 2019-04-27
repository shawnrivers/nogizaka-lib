import * as React from 'react';
import styles from './CarouselIndicator.module.scss';
import { DotIcon } from '../Icons/DotIcon';

interface IImageGalleryIndicatorProps {
  count: number;
  activeIndex: number;
  handleClick(index: number): void;
}

export const CarouselIndicator = (props: IImageGalleryIndicatorProps) => {
  const dots = [];

  for (let i = 0; i < props.count; i++) {
    dots.push(
      <button onClick={() => props.handleClick(i)} key={i}>
        <DotIcon className={props.activeIndex === i ? styles.active : styles.inactive} />
      </button>,
    );
  }

  return <div className={styles.container}>{dots}</div>;
};
