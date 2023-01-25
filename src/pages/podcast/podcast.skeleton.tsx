import React from 'react';
import ContentLoader from 'react-content-loader';
import { Grid, GridItem, Card } from 'shared/components';
import { PodcastEpisodesSkeleton } from './podcast-episodes/podcast-episodes.skeleton';

function PodcastSkeleton() {
  return (
    <div>
      <Grid>
        <GridItem size={4}>
          <Card>
            <ContentLoader
              width={320}
              height={300}
              viewBox='0 0 350 300'
              backgroundColor='#f3f3f3'
              foregroundColor='#ecebeb'
              style={{ width: '100%', height: '100%' }}
            >
              <rect x='0' y='0' rx='2' ry='2' width='350' height={300} />
            </ContentLoader>
          </Card>
        </GridItem>
        <GridItem size={8}>
          <PodcastEpisodesSkeleton />
        </GridItem>
      </Grid>
    </div>
  );
}

export { PodcastSkeleton };
