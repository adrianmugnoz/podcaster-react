import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { MainLayout } from '../main-layout.component';
import { Routes, Route } from 'react-router-dom';

const testComponentText = 'test component';
const TestComponent = () => <div>{testComponentText}</div>;

describe('<MainLayout />', () => {
  test('renders with child routes components', async () => {
    render(
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<TestComponent />}></Route>
        </Route>
      </Routes>,
    );
    const header = screen.getByRole('banner');
    const page = screen.getByTestId('page');
    const testComponent = screen.getByText(testComponentText);

    expect(header).toBeInTheDocument();
    expect(page).toBeInTheDocument();
    expect(testComponent).toBeInTheDocument();
  });
});
