import Link from 'next/link'
import Head from 'next/head';
import useDarkMode from 'use-dark-mode';
import Toggle from '../Toggle/Toggle';
import styles from './Heading.module.scss';

function Heading() {
  const darkMode = useDarkMode(false);
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

    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>

    </>
  );
}

export default Heading;
