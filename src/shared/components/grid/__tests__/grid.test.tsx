import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { Grid } from '../grid.component';
import { styles } from '../grid.css';

const testText = 'test';
describe('<Grid />', () => {
  beforeEach(() => {
    render(<Grid>{testText}</Grid>);
  });
  test('renders', async () => {
    const grid = screen.getByText(testText);
    expect(grid).toBeTruthy();
    expect(grid).toHaveClass(styles.grid);
  });
});
