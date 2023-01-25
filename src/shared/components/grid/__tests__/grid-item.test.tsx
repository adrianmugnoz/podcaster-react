import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { GridItem } from '../grid-item.component';
import { styles } from '../grid-item.css';

const testText = 'test';
describe('<GridItem />', () => {
  test('renders', async () => {
    render(<GridItem>{testText}</GridItem>);
    const grid = screen.getByText(testText);
    expect(grid).toBeTruthy();
    expect(grid).toHaveClass(styles.gridItem);
  });
  test('calculates grid item size properly', async () => {
    render(<GridItem size={1}>{testText}</GridItem>);
    const grid = screen.getByText(testText);
    const expectedValue = (1 / 12) * 100;
    expect(grid).toHaveStyle(`flex-basis: ${expectedValue}%; max-width: ${expectedValue}%`);
  });
});
