import React from 'react';
import { styles } from './page.css';

type PageProps = {
  children: React.ReactNode;
};

function Page({ children }: PageProps) {
  return (
    <div className={styles.page} data-testid='page'>
      {children}
    </div>
  );
}

export { Page };
