import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { Header } from '../header.component';
import { styles } from '../header.css';

describe('<Header />', () => {
  test('renders', async () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    const homeLink = screen.getByRole('link');
    expect(header).toBeTruthy();
    expect(header).toHaveClass(styles.header);
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
