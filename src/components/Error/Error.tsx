import Image from 'next/image';
import styles from './Error.module.scss';

function Error() {
  return (
    <div className={styles.error}>
      <h2 className={styles.errorHeader}>404</h2>
        <div className={styles.errorImg}>
          <Image src="/error.png" alt="A monster" width={200} height={200} />
        </div>
        <p className={styles.errorText}>
          Not sure what happened there, but we cant find the page you&#39;re looking for! Sorry.
        </p>
    </div>
  );
}

export default Error;
