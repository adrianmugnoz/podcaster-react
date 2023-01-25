import React from 'react';
import { styles } from './loading-indicator.css';

function LoadingIndicator() {
  return <div className={styles.loadingIndicator} role='status'></div>;
}

export { LoadingIndicator };
