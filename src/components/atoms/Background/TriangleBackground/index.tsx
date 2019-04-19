import * as React from 'react';
import styles from './TriangleBackground.module.scss';

interface ITriangleBackgroundProps {
  pattern: '1' | '2';
  position: 'top' | 'bottom';
}

export const TriangleBackground = (props: ITriangleBackgroundProps) =>
  props.position === 'top' ? (
    <div className={props.pattern === '1' ? styles['pattern-one-top'] : styles['pattern-two-top']}>
      <div className={styles['triangle-cut-top']} />
    </div>
  ) : (
    <div className={props.pattern === '1' ? styles['pattern-one-bottom'] : styles['pattern-two-bottom']}>
      <div className={styles['triangle-cut-bottom']} />
    </div>
  );
