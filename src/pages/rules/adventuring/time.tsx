import { Fragment } from 'react';
import Link from 'next/link';
import { getRulesBySection } from '../../../data-access/rules';
import Markdown from 'markdown-to-jsx';
import styles from '../../../styles/Rules.module.scss';

const getRules = (index: string) => {
    const { data, isLoading, isError } = getRulesBySection(index)
  
    if (isLoading) return '..Loading'
    if (isError) return '...Error'
    return data;
  }

const Time = () => {
  const rule = getRules("time");
  const ruleDesc = (item: string) => {
    if (item === undefined) return '';
    return item;
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.ruleGrid}>
            <Link href="/rules">
                <button className={styles.backButton}>
                        <a>{`< Back`}</a>
                </button>
            </Link>
            <Markdown options={{ wrapper: Fragment}}>{ruleDesc(rule.desc)}</Markdown>
        </div>
      </div>
    </div>
  );
}

export default Time;