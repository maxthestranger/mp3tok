import Link from 'next/link';
import { nav_links } from '../../data/footer';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.copyright}>
              © {new Date().getFullYear()} mp3toK — Made with
              <div className={styles.love}>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.11063 2.98456C2.83534 2.19853 3.82976 1.76562 4.9109 1.76562C5.71904 1.76562 6.45914 2.02112 7.11069 2.52495C7.43945 2.77927 7.73735 3.09041 8 3.45357C8.26254 3.09052 8.56055 2.77927 8.88942 2.52495C9.54086 2.02112 10.281 1.76562 11.0891 1.76562C12.1702 1.76562 13.1648 2.19853 13.8895 2.98456C14.6055 3.7614 15 4.82268 15 5.97304C15 7.15704 14.5588 8.24086 13.6115 9.38396C12.764 10.4065 11.546 11.4445 10.1356 12.6464C9.65398 13.0569 9.10806 13.5222 8.54121 14.0178C8.39146 14.1489 8.19931 14.2211 8 14.2211C7.8008 14.2211 7.60854 14.1489 7.459 14.018C6.89215 13.5223 6.34592 13.0568 5.86409 12.6461C4.45386 11.4444 3.23589 10.4065 2.38844 9.38385C1.44113 8.24086 1 7.15704 1 5.97293C1 4.82268 1.39445 3.7614 2.11063 2.98456Z" />
                </svg>
              </div>
              for the people of the internet.
            </div>
            <div className={styles.nav}>
              {nav_links.map((link_info, index) => (
                <div key={index} className={styles.nav_link}>
                  {link_info.title !== 'mts' ? (
                    <Link href={`/${link_info.link}`}>
                      <a className={styles.link}>{link_info.title}</a>
                    </Link>
                  ) : (
                    <a
                      href={link_info.link}
                      className={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Max The Stranger
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
