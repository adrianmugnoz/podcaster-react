import React from 'react';
import ContentLoader from 'react-content-loader';
import { Card } from 'shared/components';

function PodcastPlayerSkeleton() {
  return (
    <Card>
      <ContentLoader
        width={808}
        height={270}
        viewBox='0 0 808 270'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        style={{ width: '100%', height: '100%' }}
      >
        <rect x='0' y={0} rx='2' ry='2' width={808} height={30} />
        <rect x='0' y={50} rx='2' ry='2' width={808} height={160} />
        <rect x='0' y={230} rx='2' ry='2' width={808} height={40} />
      </ContentLoader>
    </Card>
  );
}

export { PodcastPlayerSkeleton };
