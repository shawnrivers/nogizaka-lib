import * as React from 'react';
import styles from './ImagePlaceholder.module.scss';

interface IImagePlaceholderProps {
  className?: string;
  aspectRadio?: number;
}

export const ImagePlaceholder = (props: IImagePlaceholderProps) =>
  props.className !== undefined ? (
    <div className={props.className} />
  ) : props.aspectRadio ? (
    <div className={styles.default} style={{ paddingBottom: `${100 * props.aspectRadio}%` }} />
  ) : (
    <div className={styles.default} style={{ paddingBottom: '100%' }} />
  );
