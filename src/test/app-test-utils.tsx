import React from 'react';
import { render as rtlRender, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { TestProviders } from './test-providers';

async function render(
  ui: React.ReactElement,
  { route = '/', wrapperProps = {}, ...renderOptions } = {},
) {
  window.history.pushState({}, 'Test page', route);

  const returnValue = {
    ...rtlRender(ui, {
      wrapper: (props) => <TestProviders {...props} {...wrapperProps} />,
      ...renderOptions,
    }),
  };

  return returnValue;
}

const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(
    () => [...screen.queryAllByLabelText(/loading/i), ...screen.queryAllByText(/loading/i)],
    { timeout: 4000 },
  );

export * from '@testing-library/react';
export { render, waitForLoadingToFinish, rtlRender };
