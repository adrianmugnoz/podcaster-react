import React from 'react';
import { rtlRender, screen } from 'test/app-test-utils';
import { ErrorBoundary } from '../error-boundary.component';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { styles } from '../error-boundary.css';

const routesConfig = [{ path: '/', element: <ErrorBoundary /> }];

describe('<ErrorBoundary />', () => {
  beforeEach(() => {
    const router = createMemoryRouter(routesConfig, {
      initialEntries: ['/'],
    });
    rtlRender(<RouterProvider router={router}></RouterProvider>);
  });
  test('renders', async () => {
    const alert = screen.getByRole('alert');
    expect(alert).toBeTruthy();
    expect(alert).toHaveClass(styles.errorBoundary);
  });
});
