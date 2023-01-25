import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { Card } from '../card.component';
import { styles } from '../card.css';

const testId = 'card-testId';
const buttonText = 'button text';
describe('<Card />', () => {
  beforeEach(() => {
    render(
      <Card>
        <button>{buttonText}</button>
      </Card>,
    );
  });
  test('renders with children', async () => {
    const card = screen.getByTestId(testId);
    const button = screen.getByRole('button');
    expect(card).toBeTruthy();
    expect(card).toHaveClass(styles.card);
    expect(button.textContent).toBe(buttonText);
  });
});
