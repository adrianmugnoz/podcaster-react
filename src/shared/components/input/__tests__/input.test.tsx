import React from 'react';
import { render, screen, fireEvent } from 'test/app-test-utils';
import { Input } from '../input.component';
import { styles } from '../input.css';

const placeholderText = 'placeholder';
const onChangeSpy = jest.fn();
describe('<Input />', () => {
  test('renders', async () => {
    render(<Input onChange={onChangeSpy} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeTruthy();
    expect(input).toHaveClass(styles.input);
  });

  test('renders with placeholder', async () => {
    render(<Input onChange={onChangeSpy} placeholder={placeholderText} />);
    const input = screen.getByPlaceholderText(placeholderText);
    expect(input).toBeTruthy();
  });

  test('renders with type', async () => {
    render(<Input onChange={onChangeSpy} type='number' />);
    const input = screen.getByRole('spinbutton');
    expect(input).toBeTruthy();
  });

  test('call onChange on user input', async () => {
    render(<Input onChange={onChangeSpy} />);
    const input = screen.getByRole('textbox');
    const inputEvent = { target: { value: 'test' } };
    fireEvent.input(input, inputEvent);
    expect(onChangeSpy).toHaveBeenCalled();
  });
});
