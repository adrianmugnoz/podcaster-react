import React from 'react';
import { Outlet } from 'react-router-dom';
import { Page } from 'shared/components/page';
import { Header } from '../header';

function MainLayout() {
  return (
    <React.Fragment>
      <Header />
      <Page>
        <Outlet />
      </Page>
    </React.Fragment>
  );
}

export { MainLayout };
