import React from 'react';
import { styles } from './card.css';
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`${styles.card} ${className || ''}`} data-testid='card-testId'>
      {children}
    </div>
  );
};

export { Card };
