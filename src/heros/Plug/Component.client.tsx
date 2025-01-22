'use client';

import classnames from 'classnames';
import { useLayoutEffect, useRef } from 'react';

import { IconYazik } from '@/components/icons';

import styles from './plug.module.scss';

export const PlugClient = () => {
  const ref = useRef<null | SVGSVGElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  useLayoutEffect(() => {
    ref2.current?.classList.remove('background');
    ref2.current?.classList.add('activeBackground');
    ref.current?.classList.remove('opacity');
    ref.current?.classList.add('active');
  }, [ref]);
  return (
    <div className={styles.img_container}>
      <div ref={ref2} className={classnames(styles.img_fon, 'background')} />
      <IconYazik ref={ref} className={classnames(styles.logo, 'opacity')} />
    </div>
  );
};
