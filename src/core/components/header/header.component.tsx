import React from 'react';
import { Link } from '../link';
import { ROUTES } from 'core/router';
import { styles } from './header.css';
import { useIsFetching } from '@tanstack/react-query';
import { LoadingIndicator } from 'shared/components';

function Header() {
  const isFetching = useIsFetching();
  return (
    <div className={styles.header} role='banner'>
      <div className={styles.content}>
        <div>
          <Link className={styles.headerTitle} route={ROUTES.HOME}>
            Podcaster
          </Link>
        </div>
        <div>{isFetching ? <LoadingIndicator /> : ''}</div>
      </div>
    </div>
  );
}

export { Header };
