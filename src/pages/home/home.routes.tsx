import React from 'react';

const Home = React.lazy(() => import('./home.page'));

export const homeRoutes = {
  path: '/',
  element: (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Home />
    </React.Suspense>
  ),
};
