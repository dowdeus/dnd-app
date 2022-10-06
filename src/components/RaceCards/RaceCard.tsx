import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './RaceCard.module.scss';

type RaceCardProps = {
    header: string;
    url?: string
    abilityBonuses: Array<any>;
    traits: Array<any>;
};

function RaceCard({
  url = 'races', traits, abilityBonuses, ...props
}: RaceCardProps) {
  // Card animations
  const hoverOn = {
    rest: {
      scale: 1,
      originX: 0,
      transition: {
        duration: 0.40,
        ease: 'easeOut',
        bounce: 0,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        delay: 0.40,
        duration: 0.65,
        ease: 'easeOut',
        bounce: 0,
      },
      zIndex: 10,
    },
  };
  const headerOn = {
    rest: {
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      top: 240,
      transition: {
        duration: 0.40,
        ease: 'easeOut',
        bounce: 0,
      },
    },
    hover: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      top: 0,
      color: '#dec74c',
      transition: {
        duration: 0.65,
        delay: 0.40,
        ease: 'easeOut',
        bounce: 0,
      },
    },
  };
  const contentOn = {
    rest: {
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      top: 240,
      transition: {
        duration: 0.40,
        ease: 'easeOut',
        bounce: 0,
      },
    },
    hover: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      top: 0,
      transition: {
        duration: 0.65,
        delay: 0.40,
        ease: 'easeOut',
        bounce: 0,
      },
    },

  };
  return (
        <Link href={url}>
            <motion.div className={styles.cardContainer} id={`card${props.header}` } variants={hoverOn} initial='rest' whileHover='hover' animate='rest'>
                <motion.div className={styles.cardTitle} id={`cardTitle${props.header}`} variants={headerOn}>
                    <a><h2>{props.header}</h2></a>
                </motion.div>
                <motion.div className={styles.cardContent} id={`cardContent${props.header}`} variants={contentOn}>
                    <div className={styles.cardBonuses}>
                        <h3>Ability Bonuses:</h3>
                    {abilityBonuses?.map((abilityBonusesItem) => (
                        <li key={abilityBonusesItem.ability_score.index}>
                            <p>{abilityBonusesItem.ability_score.name}
                            = {abilityBonusesItem.bonus}</p>
                        </li>
                    ))}
                    </div>

                    <div className={styles.cardTraits}>
                        <h3>Traits:</h3>
                    {traits?.map((traitsItem) => (
                        <li key={traitsItem.index}>
                            <p>{traitsItem.name}</p>
                        </li>
                    ))}
                    </div>
                </motion.div>

            </motion.div>
        </Link>
  );
}

export default RaceCard;
