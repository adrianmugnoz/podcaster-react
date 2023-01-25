import React from 'react';
import { styles } from './not-found.css';

function NotFound() {
  return (
    <div className={styles.notFound} role='alert'>
      404 - Page not found
    </div>
  );
}

export { NotFound };
