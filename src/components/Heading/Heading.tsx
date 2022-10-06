import Link from 'next/link';
import Head from 'next/head';
import styles from './Heading.module.scss';

function Heading() {
  return (
    <>
    <Head>
      <title>D&D Index</title>
      <meta name="description" content="Contains information of D&D rules and content" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className={styles.nav}>
      <h1 className={styles.title}>
          <Link href="/"><a>{'D&D Index'}</a></Link>
      </h1>

      <div className={styles.navContainer}>
        <Link href="/"><a className={styles.navLink}>Home</a></Link>
        <Link href="/rules"><a className={styles.navLink}>Rules</a></Link>
        <Link href="/monsters"><a className={styles.navLink}>Monsters</a></Link>
        <Link href="/spells"><a className={styles.navLink}>Spells</a></Link>
        <Link href="/equipment"><a className={styles.navLink}>Equipment</a></Link>
      </div>
    </div>

    </>
  );
}

export default Heading;
