import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './core/components/main-layout';

import { homeRoutes } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [homeRoutes],
  },
]);

export { router };
