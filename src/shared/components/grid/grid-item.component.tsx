import React from 'react';
import { styles } from './grid-item.css';

type BreakpointsValues = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridItemProps = {
  children: React.ReactNode;
  size?: BreakpointsValues;
};

const GRID_SIZE = 12;

function GridItem({ children, size = 12 }: GridItemProps) {
  const calculatedPercentage = `${(size / GRID_SIZE) * 100}%`;
  return (
    <div
      className={styles.gridItem}
      style={{
        flexBasis: calculatedPercentage,
        maxWidth: calculatedPercentage,
      }}
    >
      {children}
    </div>
  );
}

export { GridItem };
