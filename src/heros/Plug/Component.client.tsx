'use client';

import classnames from 'classnames';
import { useLayoutEffect, useRef } from 'react';

import { IconArrow, IconYazik } from '@/components/icons';

import styles from './plug.module.scss';

export const PlugClient = () => {
  const ref = useRef<null | SVGSVGElement>(null);
  const ref2 = useRef<null | HTMLDivElement>(null);
  const ref3 = useRef<null | HTMLAnchorElement>(null);
  useLayoutEffect(() => {
    ref2.current?.classList.remove('background');
    ref2.current?.classList.add('activeBackground');
    ref.current?.classList.remove('opacity');
    ref.current?.classList.add('active');
    ref3.current?.classList.remove('removeZIndex');
    ref3.current?.classList.add('addZIndex');
  }, [ref]);
  return (
    <div className={styles.img_container}>
      <div ref={ref2} className={classnames(styles.img_fon, 'background')} />
      <IconYazik ref={ref} className={classnames(styles.logo, 'opacity')} />
      <a ref={ref3} className={classnames(styles.arrow, 'removeZIndex')} href='#content'>
        <IconArrow className={styles.arrowIcon} />
      </a>
    </div>
  );
};
