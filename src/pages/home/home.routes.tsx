import React from 'react';
import { HomeSkeleton } from './home.skeleton';

const Home = React.lazy(() => import('./home.page'));

export const homeRoutes = {
  path: '/',
  element: (
    <React.Suspense fallback={<HomeSkeleton />}>
      <Home />
    </React.Suspense>
  ),
};
