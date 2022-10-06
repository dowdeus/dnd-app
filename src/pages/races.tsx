import { motion } from 'framer-motion';
import { useRacesByIndex } from '../data-access/useRules';
import styles from '../styles/Races.module.scss';
import RaceCard from '../components/RaceCards/RaceCard';

// Carousel controls
const slideLeft = () => {
  const wrapper = document.getElementById('wrapper');
  if (wrapper != null) {
    wrapper.scrollLeft -= 1500;
  }
};
const slideRight = () => {
  const wrapper = document.getElementById('wrapper');
  if (wrapper != null) {
    wrapper.scrollLeft += 1500;
  }
};

const useGetRules = (index:string) => {
  const { data, isLoading, isError } = useRacesByIndex(index);

  if (isLoading) return '..Loading';
  if (isError) return '..Error';
  return data;
};

const baseUrl = 'races';

const Races = () => {
  const dragonborn = useGetRules('dragonborn');
  const dwarf = useGetRules('dwarf');
  const elf = useGetRules('elf');
  const gnome = useGetRules('gnome');
  const halfElf = useGetRules('half-elf');
  const halfOrc = useGetRules('half-orc');
  const halfling = useGetRules('halfling');
  const human = useGetRules('human');
  const tiefling = useGetRules('tiefling');

  return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.carouselContainer}>
                        <motion.button className={styles.shiftBtnLeft} onClick={slideLeft}>{'<'}</motion.button>
                        <div className={styles.carouselWrapper} id={'wrapper'} >
                            <RaceCard header={dragonborn.name} url={`${baseUrl}/${dragonborn.index}`} traits={dragonborn.traits} abilityBonuses={dragonborn.ability_bonuses} />
                            <RaceCard header={dwarf.name} url={`${baseUrl}/${dwarf.index}`} traits={dwarf.traits} abilityBonuses={dwarf.ability_bonuses} />
                            <RaceCard header={elf.name} url={`${baseUrl}/${elf.index}`} traits={elf.traits} abilityBonuses={elf.ability_bonuses} />
                            <RaceCard header={gnome.name} url={`${baseUrl}/${gnome.index}`} traits={gnome.traits} abilityBonuses={gnome.ability_bonuses} />
                            <RaceCard header={halfElf.name} url={`${baseUrl}/${halfElf.index}`} traits={halfElf.traits} abilityBonuses={halfElf.ability_bonuses} />
                            <RaceCard header={halfOrc.name} url={`${baseUrl}/${halfOrc.index}`} traits={halfOrc.traits} abilityBonuses={halfOrc.ability_bonuses} />
                            <RaceCard header={halfling.name} url={`${baseUrl}/${halfling.index}`} traits={halfling.traits} abilityBonuses={halfling.ability_bonuses} />
                            <RaceCard header={human.name} url={`${baseUrl}/${human.index}`} traits={human.traits} abilityBonuses={human.ability_bonuses} />
                            <RaceCard header={tiefling.name} url={`${baseUrl}/${tiefling.index}`} traits={tiefling.traits} abilityBonuses={tiefling.ability_bonuses} />
                        </div>
                        <motion.button className={styles.shiftBtnRight} onClick={slideRight}>{'>'}</motion.button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Races;
