import { Book } from '@/components/Book';
import { Footer } from '@/components/globals/Footer';
import { Link } from '@/components/ui/link';
import { Typography } from '@/components/ui/typography';

import styles from './plug.module.scss';

export const Plug = () => (
  <div className={styles.wrapper}>
    <div className={styles.img_container}>
      <Book />
    </div>
    <div className={styles.content_container}>
      <div className={styles.title}>
        <Typography tag='h2' variant='title2'>
          издательство
        </Typography>
        <div className={styles.subtitle}>
          <Typography className={styles.slogan} tag='h3' variant='title3'>
            ценящим
            <br />
            вкус слова
          </Typography>
          <Typography tag='h1' variant='title1'>
            язык
          </Typography>
        </div>
      </div>
      <div className={styles.description_wrapper}>
        <Typography className={styles.description} tag='p' variant='text1'>
          Lorem ipsum dolor sit amet consectetur. Nibh nulla potenti etiam arcu pellentesque. Eget
          egestas orci arcu non amet vulputate sollicitudin etiam commodo. Congue vulputate sem
          hendrerit.
        </Typography>
        <Link className={styles.link} href='https://forms.gle/pDG3vC2qXzrqcxVP9' target='_blank'>
          подать заявку
        </Link>
      </div>
      <Footer />
    </div>
  </div>
);
