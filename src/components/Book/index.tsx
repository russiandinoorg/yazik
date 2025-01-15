import styles from './book.module.scss';

export const Book = () => (
  <div className={styles.container}>
    <div className={styles.front} />
    <div className={styles.sideLeft} />
    <div className={styles.sideRight} />
    <div className={styles.top} />
    <div className={styles.bottom} />
    <div className={styles.back} />
  </div>
);
