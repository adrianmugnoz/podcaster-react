import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { useQuery } from '@tanstack/react-query';
import { Header } from '../header.component';
import { styles } from '../header.css';

import nock from 'nock';
import axios from 'axios';

const fakeUrl = 'http://test.com';
nock(fakeUrl).get('/').reply(200, {
  data: true,
});

const dummyQueryFn = () => {
  return axios.get(fakeUrl);
};

const HeaderWithFetching = () => {
  useQuery({
    queryKey: ['test'],
    queryFn: dummyQueryFn,
  });
  return <Header />;
};

describe('<Header />', () => {
  test('renders', async () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    const homeLink = screen.getByRole('link');
    expect(header).toBeTruthy();
    expect(header).toHaveClass(styles.header);
    expect(homeLink).toHaveAttribute('href', '/');
  });
  test('displays loading indicator when fetching', async () => {
    render(<HeaderWithFetching />);

    const loadingIndicator = await screen.findByRole('status');
    expect(loadingIndicator).toBeTruthy();
  });
});
