import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { LoadingIndicator } from '../loading-indicator.component';
import { styles } from '../loading-indicator.css';

describe('<LoadingIndicator />', () => {
  beforeEach(() => {
    render(<LoadingIndicator />);
  });
  test('renders', async () => {
    const loadingIndicator = screen.getByRole('status');
    expect(loadingIndicator).toBeTruthy();
    expect(loadingIndicator).toHaveClass(styles.loadingIndicator);
  });
});
