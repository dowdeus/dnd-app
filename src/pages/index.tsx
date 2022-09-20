import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import Card from '../components/Card/Card';

const Home: NextPage = () => (
  <div className={styles.container}>
    <div className={styles.main}>
      <div className={styles.grid}>
        <Card header="Rules" body="A section containing a list of rules such as ability-checks, ability-scores-and-modifiers, actions-in-combat, making-an-attack, standard-exchange-rates ect" url="rules" subText="Borken down by type" />
        <Card header="Game mechanics" body="A section focusing on the mechanics such as conditions, damage types ect" url="gamemechanics" subText="There are 15 conditions in the game" />
        <Card header="Races" body="The nine races of DND from the PHB" url="races" subText="9 choices to choose from" />
        <Card header="Classes" body="Class is the primary definition of what your character can do. It’s more than a profession; it’s your character’s calling. Class shapes the way you think about the world and interact with it and your relationship with other people and powers in the multiverse." url="classes" subText="12 callings" />
        <Card header="Character Data" body="Atrributes of a character such as ability scores, alignements, skills ect" url="characterdata" subText="Who are you?" />
        <Card header="Traits, Features and Feats" body="A section containing a list of Traits, Features and Feats from the PHB" url="tff" subText="How are you evolving?" />
        <Card header="Monsters" body="Creature types are a means of categorizing and distinguishing monsters. Creatures are placed in one of fourteen types: aberration, beast, celestial, construct, dragon, elemental, fey, fiend, giant, humanoid, monstrosity, ooze, plant, or undead." url="monsters" subText="334 things to eat you" />
        <Card header="Spells" body="A spell's description tells you whether the spell Targets Creatures, Objects, or a point of Origin for an area of Effect. Unless a spell has a perceptible Effect, a creature might not know it was targeted by a spell at all." url="spells" subText="319 diffrent ways to achive your goals" />
        <Card header="Equipment" body="The marketplace of a large city teems with buyers and sellers of many sorts: dwarf smiths and elf woodcarvers, halfling farmers and gnome jewelers. In the largest cities, almost anything imaginable is offered for sale, from exotic spices and luxurious clothing to wicker baskets and practical swords." url="equipment" subText="237 items to browse" />
      </div>
    </div>
  </div>
);

export default Home;
