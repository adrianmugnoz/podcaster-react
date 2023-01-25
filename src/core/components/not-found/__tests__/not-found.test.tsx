import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { NotFound } from '../not-found.component';
import { styles } from '../not-found.css';

describe('<NotFound />', () => {
  beforeEach(() => {
    render(<NotFound />);
  });
  test('renders', async () => {
    const alert = screen.getByRole('alert');
    expect(alert).toBeTruthy();
    expect(alert).toHaveClass(styles.notFound);
  });
});
