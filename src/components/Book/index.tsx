import styles from './book.module.scss'

export const Book = () => (
  <div className={styles.container}>
    <div className={styles.front}></div>
    <div className={styles.sideLeft}></div>
    <div className={styles.sideRight}></div>
    <div className={styles.top}></div>
    <div className={styles.bottom}></div>
    <div className={styles.back}></div>
  </div>
)
