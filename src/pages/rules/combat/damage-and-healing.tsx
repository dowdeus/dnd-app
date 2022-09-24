import { Fragment } from 'react';
import Markdown from 'markdown-to-jsx';
import { useRulesBySection } from '../../../data-access/useRules';
import styles from '../../../styles/Rules.module.scss';
import BackButton from '../../../components/BackButton/BackButton';
import Error from '../../../components/Error/Error';

const useGetRules = (index: string) => {
  const { data, isLoading, isError } = useRulesBySection(index);

  if (isLoading) return '..Loading';
  if (isError) return <Error />;
  return data;
};

const DamageAndHealing = () => {
  const rule = useGetRules('damage-and-healing');
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

export default DamageAndHealing;
