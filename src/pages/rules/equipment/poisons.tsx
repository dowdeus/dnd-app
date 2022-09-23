import { Fragment } from 'react';
import Markdown from 'markdown-to-jsx';
import { useRulesBySection } from '../../../data-access/useRules';
import BackButton from '../../../components/BackButton/BackButton';
import styles from '../../../styles/Rules.module.scss';
import Error from '../../../components/Error/Error';

const useGetRules = (index:string) => {
  const { data, isLoading, isError } = useRulesBySection(index);

  if (isLoading) return '..loading';
  if (isError) return <Error />;
  return data;
};

const Poisons = () => {
  const rule = useGetRules('poisons');
  const ruleDesc = (item:string) => {
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

export default Poisons;
