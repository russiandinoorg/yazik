import React from 'react'

import { IconRD, IconTelegram, IconInstagram, IconVK } from '@/components/icons'

import styles from './footer.module.scss'
import { Typography } from '@/components/ui/typography'
import { Link } from '@/components/ui/link'

export async function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <Typography tag="p" variant="text2">
            © Язык, 2024
          </Typography>
          <Typography tag="p" variant="text2">
            Санкт-Петербург
          </Typography>
          <Typography tag="p" variant="text2">
            #хбдщдбдщ
          </Typography>
        </div>
        <div className={styles.net_container}>
          <a href="https://t.me/yazykpublishing" target="_blank" className={styles.net}>
            <IconTelegram />
          </a>
          <a href="https://vk.com/yazykpublishing" target="_blank" className={styles.net}>
            <IconVK />
          </a>
          <a href="https://www.instagram.com/yazykpublishing" target="_blank" className={styles.net}>
            <IconInstagram />
          </a>
        </div>
        <a href="https://russiandino.ru" target="_blank" className={styles.rd}>
          <IconRD />
        </a>
      </div>
    </footer>
  )
}
