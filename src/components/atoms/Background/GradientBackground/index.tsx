import * as React from 'react';
import gradientBg from 'assets/images/gradient-bg.jpg';
import gradientBg2x from 'assets/images/gradient-bg@2x.jpg';
import gradientBg2 from 'assets/images/gradient-bg-2.jpg';
import gradientBg2x2 from 'assets/images/gradient-bg-2@2x.jpg';
import styles from './GradientBackground.module.scss';

interface IGradientBackgroundProps {
  type?: number;
}

const GradientBg = [
  {
    '1x': gradientBg,
    '2x': gradientBg2x,
  },
  {
    '1x': gradientBg2,
    '2x': gradientBg2x2,
  },
];

export const GradientBackground = (props: IGradientBackgroundProps) => {
  const bg = React.useMemo(() => (props.type ? GradientBg[props.type - 1] : GradientBg[0]), [[props.type, GradientBg]]);

  return <img src={bg['1x']} srcSet={`${bg['2x']} 2x`} className={styles.background} />;
};
