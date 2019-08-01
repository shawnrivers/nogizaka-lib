import * as React from 'react';
import gradientBg2 from 'assets/images/gradient-bg-2.svg';
import gradientBg from 'assets/images/gradient-bg.svg';
import styles from './GradientBackground.module.scss';

interface IGradientBackgroundProps {
  type?: number;
}

const GradientBg = [gradientBg, gradientBg2];

export const GradientBackground = (props: IGradientBackgroundProps) => {
  const bg = React.useMemo(() => (props.type ? GradientBg[props.type - 1] : GradientBg[0]), [[props.type, GradientBg]]);

  return <img src={bg} className={styles.background} />;
};
