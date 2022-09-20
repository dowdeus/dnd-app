import { getRulesByIndex } from '../data-access/rules';
import styles from '../styles/Rules.module.scss';
import CardLinkList from '../components/CardLinkList/CardLinkList';

const getRules = (index: string) => {
    const { data, isLoading, isError } = getRulesByIndex(index)
  
    if (isLoading) return '..Loading'
    if (isError) return '...Error'
    return data;
  }

const baseUrl='rules';

const Rules = () => {
  const adventure = getRules("adventuring")
  const appendix = getRules("appendix")
  const combat = getRules("combat")
  const equipment = getRules("equipment")
  const spellcasting = getRules("spellcasting")
  const usingAbilityScores = getRules("using-ability-scores")

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.grid}>
          <CardLinkList header={adventure.name} baseUrl={`${baseUrl}/${adventure.index}`} list={adventure.subsections} />
          <CardLinkList header={appendix.name} baseUrl={`${baseUrl}/${appendix.index}`} list={appendix.subsections} />
          <CardLinkList header={combat.name} baseUrl={`${baseUrl}/${combat.index}`} list={combat.subsections} />
        </div>
        <div className={styles.grid}>
          <CardLinkList header={equipment.name} baseUrl={`${baseUrl}/${equipment.index}`} list={equipment.subsections} />
          <CardLinkList header={spellcasting.name} baseUrl={`${baseUrl}/${spellcasting.index}`} list={spellcasting.subsections} />
          <CardLinkList header={usingAbilityScores.name} baseUrl={`${baseUrl}/${usingAbilityScores.index}`} list={usingAbilityScores.subsections} />
        </div>
      </div>
    </div>
  );
}

export default Rules;