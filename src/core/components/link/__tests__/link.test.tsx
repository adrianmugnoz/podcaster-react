import React from 'react';
import { render, screen } from 'test/app-test-utils';
import { Link } from '../link.component';
import { ROUTES } from 'core/router';

describe('<Link />', () => {
  test('renders with correct link', async () => {
    render(
      <div>
        <Link route={ROUTES.PODCAST} params={{ podcastId: '1' }}>
          link podcast
        </Link>
        <Link route={ROUTES.EPISODE} params={{ podcastId: '1', episodeId: '1' }}>
          link episode
        </Link>
      </div>,
    );
    const expected = ['/podcast/1', '/podcast/1/episode/1'];
    const links = screen.getAllByRole('link');

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', expected[index]);
    });
  });
});
