import React from 'react';

import { IconRD, IconTelegram, IconInstagram, IconVK } from '@/components/icons';
import { Typography } from '@/components/ui/typography';

import styles from './footer.module.scss';

export const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.copyright}>
        <Typography tag='p' variant='text2'>
          © Язык, 2024
        </Typography>
        <Typography tag='p' variant='text2'>
          Санкт-Петербург
        </Typography>
        <Typography tag='p' variant='text2'>
          #хбдщдбдщ
        </Typography>
      </div>
      <div className={styles.net_container}>
        <a
          className={styles.net}
          href='https://t.me/yazykpublishing'
          rel='noreferrer'
          target='_blank'
        >
          <IconTelegram />
        </a>
        <a
          className={styles.net}
          href='https://vk.com/yazykpublishing'
          rel='noreferrer'
          target='_blank'
        >
          <IconVK />
        </a>
        <a
          className={styles.net}
          href='https://www.instagram.com/yazykpublishing'
          rel='noreferrer'
          target='_blank'
        >
          <IconInstagram />
        </a>
      </div>
      <a className={styles.rd} href='https://russiandino.ru' rel='noreferrer' target='_blank'>
        <IconRD />
      </a>
    </div>
  </footer>
);
