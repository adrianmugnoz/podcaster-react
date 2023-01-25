import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { usePodcastDetail } from './hooks';
import { fetchPodcastList, TPodcast } from 'core/services/podcast';
import { Grid, GridItem } from 'shared/components';
import { PodcastDetailCard } from './components';
import { PodcastSkeleton } from './podcast.skeleton';

function Podcast() {
  const [extendedPodcastData, setExtendedPodcastData] = React.useState<TPodcast>();
  const { podcastId } = useParams();
  const { status, data } = usePodcastDetail(podcastId);
  const queryClient = useQueryClient();

  React.useEffect(() => {
    const fetchPodcast = async () => {
      const podcasts: TPodcast[] = await queryClient.ensureQueryData({
        queryKey: ['podcastList'],
        queryFn: fetchPodcastList,
      });
      const currentPodcast = podcasts.find((podcast) => podcast.id === podcastId);
      setExtendedPodcastData(currentPodcast);
    };
    fetchPodcast();
  }, []);

  return (
    <div>
      {status === 'loading' ? (
        <PodcastSkeleton />
      ) : (
        <Grid>
          <GridItem size={4}>
            {extendedPodcastData && (
              <PodcastDetailCard
                author={data.author}
                description={extendedPodcastData.description}
                image={extendedPodcastData.images.large}
                title={data.title}
              />
            )}
          </GridItem>
          <GridItem size={8}>
            <Outlet context={{ podcast: data }}></Outlet>
          </GridItem>
        </Grid>
      )}
    </div>
  );
}

export default Podcast;
export { Podcast };
