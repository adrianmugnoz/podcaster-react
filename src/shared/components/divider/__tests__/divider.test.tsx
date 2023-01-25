import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { Divider } from '../divider.component';
import { styles } from '../divider.css';

describe('<Divider />', () => {
  beforeEach(() => {
    render(<Divider />);
  });
  test('renders', async () => {
    const divider = screen.getByRole('separator');
    expect(divider).toBeTruthy();
    expect(divider).toHaveClass(styles.divider);
  });
});
