import Image from 'next/image';
import styles from './logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image
        src="/img/logo_mp3.svg"
        alt="mp3tok logo"
        width={221}
        height={125}
      />
    </div>
  );
}
