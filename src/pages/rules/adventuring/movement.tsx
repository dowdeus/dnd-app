import { Fragment } from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { useRulesBySection } from '../../../data-access/useRules';
import styles from '../../../styles/Rules.module.scss';
import BackButton from '../../../components/BackButton/BackButton';

const useGetRules = (index: string) => {
  const { data, isLoading, isError } = useRulesBySection(index);

  if (isLoading) return '..Loading';
  if (isError) return '...Error';
  return data;
};

const Movement = () => {
  const rule = useGetRules('movement');
  const ruleDesc = (item: string) => {
    if (item === undefined) return '';
    return item;
  };

  return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.ruleGrid}>
              <BackButton href='/rules'></BackButton>
              <Markdown options={{ wrapper: Fragment }}>{ruleDesc(rule.desc)}</Markdown>
          </div>
        </div>
      </div>
  );
};

export default Movement;
