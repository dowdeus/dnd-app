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

    <h1 className={styles.title}>
        Welcome to
        {' '}
        <Link href="/"><a>{'D&D Index'}</a></Link>
    </h1>

    </>
  );
}

export default Heading;
