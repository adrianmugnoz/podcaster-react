import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import { homeRoutes } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [homeRoutes],
  },
]);

export { router };
