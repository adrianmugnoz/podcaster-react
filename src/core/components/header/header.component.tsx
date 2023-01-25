import React from 'react';
import { Link } from '../link';
import { ROUTES } from 'core/router';
import { styles } from './header.css';

function Header() {
  return (
    <div className={styles.header} role='banner'>
      <div className={styles.content}>
        <div>
          <Link className={styles.headerTitle} route={ROUTES.HOME}>
            Podcaster
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Header };
