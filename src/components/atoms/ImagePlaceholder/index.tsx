import * as React from 'react';
import styles from './ImagePlaceholder.module.scss';

interface IImagePlaceholderProps {
  width?: number;
  height?: number;
}

export const ImagePlaceholder = (props: IImagePlaceholderProps) =>
  props.width !== undefined && props.height !== undefined ? (
    <div style={{ width: `${props.width}px`, height: `${props.height}px` }} />
  ) : (
    <div className={styles.default} />
  );
