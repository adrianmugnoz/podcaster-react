import React from 'react';
import { useRouteError } from 'react-router-dom';
import { styles } from './error-boundary.css';

function ErrorBoundary() {
  const error = useRouteError();
  console.error({ error });
  return (
    <div className={styles.errorBoundary} role='alert'>
      There was an error
    </div>
  );
}

export { ErrorBoundary };
