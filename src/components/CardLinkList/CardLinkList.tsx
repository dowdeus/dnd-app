import Link from 'next/link';
import styles from './CardLinkList.module.scss';

type CardLinkListProps = {
  header: string;
  baseUrl?: string;
  list: Array<any>;
};

function CardLinkList({ baseUrl = '', header, list }: CardLinkListProps) {
  return (
    <div className={styles.card}>
      <h2>{header}</h2>
      {list?.map((listItem) => (
        <li key={listItem.index}>
          <Link href={`${baseUrl}/${listItem.index}`}>
            <a>{listItem.name}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}

export default CardLinkList;
