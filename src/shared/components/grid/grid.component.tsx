import React from 'react';
import { styles } from './grid.css';

type GridProps = {
  children: React.ReactNode;
};

function Grid({ children }: GridProps) {
  return <div className={styles.grid}>{children}</div>;
}

export { Grid };
