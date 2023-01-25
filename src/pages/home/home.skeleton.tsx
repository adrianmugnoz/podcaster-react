import React from 'react';
import ContentLoader from 'react-content-loader';
import { Grid, GridItem, Card } from 'shared/components';

function HomeSkeleton() {
  return (
    <div>
      <ContentLoader
        width={1280}
        height={30}
        viewBox='0 0 1280 30'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
        style={{ width: '100%', height: '100%' }}
      >
        <rect x={1280 - 350} y='0' rx='2' ry='2' width='350' height='30' />
      </ContentLoader>
      <div style={{ marginBottom: 20 }}></div>
      <Grid>
        {[...new Array(100)].map((_, index) => (
          <GridItem key={index} size={3}>
            <Card>
              <ContentLoader
                style={{ width: '100%', height: '100%' }}
                width={268}
                height={94}
                viewBox='0 0 268 94'
                backgroundColor='#f3f3f3'
                foregroundColor='#ecebeb'
              >
                <rect x='0' y='0' rx='2' ry='2' width='268' height={94} />
              </ContentLoader>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

export { HomeSkeleton };
