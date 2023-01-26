import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './core/components/main-layout';
import { NotFound } from 'core/components/not-found';
import { homeRoutes } from './pages/home';
import { podcastRoutes } from 'pages/podcast';
import { ErrorBoundary } from 'core/components/error-boundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [homeRoutes, podcastRoutes, { path: '*', element: <NotFound /> }],
  },
]);

export { router };
