import Image from 'next/image';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>A fun side project</p>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        {' '}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
      <a
        href="https://www.dnd5eapi.co/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Using D&D 5e API
      </a>
    </footer>
  );
}

export default Footer;
