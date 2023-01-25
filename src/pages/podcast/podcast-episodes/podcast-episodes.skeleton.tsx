import React from 'react';
import ContentLoader from 'react-content-loader';
import { Card } from 'shared/components';

function PodcastEpisodesSkeleton() {
  return (
    <div>
      <Card>
        <ContentLoader
          width={808}
          height={30}
          viewBox='0 0 808 30'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          style={{ width: '100%', height: '100%' }}
        >
          <rect x='0' y='0' rx='2' ry='2' width='350' height='30' />
        </ContentLoader>
      </Card>
      <div style={{ marginBottom: 20 }}></div>
      <Card>
        <ContentLoader
          width={808}
          height={300}
          viewBox='0 0 808 300'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          style={{ width: '100%', height: '100%' }}
        >
          {[...new Array(10)].map((_, index) => (
            <rect key={index} x='0' y={index * 30} rx='2' ry='2' width={808} height={15} />
          ))}
        </ContentLoader>
      </Card>
    </div>
  );
}

export { PodcastEpisodesSkeleton };
