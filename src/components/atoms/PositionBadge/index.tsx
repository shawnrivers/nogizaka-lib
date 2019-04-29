import * as React from 'react';
import { PositionType } from '../../../utils/constants';
import styles from './PositionBadge.module.scss';

interface IPositionBadgeProps {
  position: PositionType;
}

export const PositionBadge = (props: IPositionBadgeProps) => {
  let history = '';
  switch (props.position) {
    case PositionType.Center:
      history = 'C';
      break;
    case PositionType.Fukujin:
      history = 'F';
      break;
    case PositionType.Selected:
      history = 'S';
      break;
    case PositionType.Under:
      history = 'U';
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      {history !== '' ? (
        <span className={`${styles['position-badge']} ${styles[`${props.position}-badge`]}`}>{history}</span>
      ) : (
        <span className={styles['none-position-badge']} />
      )}
    </div>
  );
};
