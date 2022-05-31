import styles from './search.module.scss';

export default function Search() {
  return (
    <form className={styles.form}>
      <input
        className={styles.search}
        type="text"
        autoComplete="off"
        placeholder="Search keywords or paste link here"
      />
      <button type="submit" className={styles.btn}>
        Search
      </button>

      <a href="https://1wpcon.top/" target="_blank">
        More info
      </a>
    </form>
  );
}
