import { Fragment } from 'react';
import Markdown from 'markdown-to-jsx';
import { useRulesBySection } from '../../../data-access/useRules';
import BackButton from '../../../components/BackButton/BackButton';
import styles from '../../../styles/Rules.module.scss';

const useGetRules = (index:string) => {
  const { data, isLoading, isError } = useRulesBySection(index);

  if (isLoading) return '..loading';
  if (isError) return '..error';
  return data;
};

const SentientMagicItems = () => {
  const rule = useGetRules('sentient-magic-items');
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

export default SentientMagicItems;
