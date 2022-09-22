import { Fragment } from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import { useRulesBySection } from '../../../data-access/useRules';
import styles from '../../../styles/Rules.module.scss';

const useGetRules = (index:string) => {
  const { data, isLoading, isError } = useRulesBySection(index);

  if (isLoading) return '..loading';
  if (isError) return '..error';
  return data;
};

const StandardExchangeRates = () => {
  const rule = useGetRules('standard-exchange-rates');
  const ruleDesc = (item:string) => {
    if (item === undefined) return '';
    return item;
  };

  return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.rulesGrid}>
                    <Link href='/rules'><button className={styles.backButton}>
                        <a>{'<Back'}</a></button>
                    </Link>
                    <Markdown options={{ wrapper: Fragment }}>{ruleDesc(rule.desc)}</Markdown>
                </div>
            </div>
        </div>
  );
};

export default StandardExchangeRates;
