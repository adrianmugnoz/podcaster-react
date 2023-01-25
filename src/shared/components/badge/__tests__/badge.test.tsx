import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { Badge } from '../badge.component';
import { styles } from '../badge.css';

const badgeText = '100';
describe('<Badge />', () => {
  beforeEach(() => {
    render(<Badge>{badgeText}</Badge>);
  });
  test('renders with children', async () => {
    const badge = screen.getByText(badgeText);
    expect(badge).toBeTruthy();
    expect(badge).toHaveClass(styles.badge);
    expect(badge.textContent).toBe(badgeText);
  });
});
