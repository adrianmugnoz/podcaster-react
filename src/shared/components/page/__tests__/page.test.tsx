import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { Page } from '../page.component';
import { styles } from '../page.css';

const pageText = 'test';
describe('<Page />', () => {
  beforeEach(() => {
    render(<Page>{pageText}</Page>);
  });
  test('renders with children', async () => {
    const page = screen.getByText(pageText);
    expect(page).toBeTruthy();
    expect(page).toHaveClass(styles.page);
    expect(page.textContent).toBe(pageText);
  });
});
