import Link from 'next/link';
import styles from './Card.module.scss';

type CardProps = {
  header: string;
  body: string;
  svg?: SVGAElement;
  url?: string;
  subText?: string;
};

function Card({ url = '/', ...props }: CardProps) {
  return (
    <Link href={url}>
      <div className={styles.card}>
          <a>{props.header}</a>
          {props.subText ? (<p className={styles.subText}>{props.subText}</p>) : (<></>)}
          <p>{props.body}</p>
      </div>
    </Link>
  );
}

export default Card;
