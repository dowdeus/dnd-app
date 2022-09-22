import Link from 'next/link';
import styles from './BackButton.module.scss';

type BackButtonProps = {
    href:string;
}

function BackButton({ href }: BackButtonProps) {
  return (
        <Link href={href}>
            <button className={styles.backButton}>
                <a>{'<Back'}</a>
            </button>
        </Link>
  );
}

export default BackButton;
