import React from 'react';
import { styles } from './badge.css';

type BadgeProps = {
  children: React.ReactNode;
};

function Badge({ children }: BadgeProps) {
  return <div className={styles.badge}>{children}</div>;
}

export { Badge };
