import React from 'react';
import { PodcastSkeleton } from './podcast.skeleton';
import { PodcastEpisodesSkeleton } from './podcast-episodes/podcast-episodes.skeleton';

const Podcast = React.lazy(() => import('./podcast.page'));
const PodcastEpisodes = React.lazy(() => import('./podcast-episodes'));

export const podcastRoutes = {
  path: '/podcast/:podcastId',
  element: (
    <React.Suspense fallback={<PodcastSkeleton />}>
      <Podcast />
    </React.Suspense>
  ),
  children: [
    {
      path: '/podcast/:podcastId',
      element: (
        <React.Suspense fallback={<PodcastEpisodesSkeleton />}>
          <PodcastEpisodes />
        </React.Suspense>
      ),
    },
  ],
};
