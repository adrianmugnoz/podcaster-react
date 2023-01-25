import React from 'react';
import { Link } from 'core/components/link';
import { useQuery } from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import { fetchPodcastList, TPodcast } from 'core/services/podcast';
import { Badge, Grid, GridItem, Input } from 'shared/components';
import { HomeCard } from './components';
import { ROUTES } from 'core/router';
import { styles } from './home.css';
import { HomeSkeleton } from './home.skeleton';

function usePodcasts() {
  return useQuery({
    queryKey: ['podcastList'],
    queryFn: fetchPodcastList,
  });
}

function Home() {
  const { status, data } = usePodcasts();
  const [filteredPodcasts, setFilteredPodcasts] = React.useState<TPodcast[]>([]);

  React.useEffect(() => {
    if (data) {
      setFilteredPodcasts(data);
    }
  }, [data]);

  const debouncedFilter = React.useCallback(
    debounce((value) => {
      if (value.length > 0) {
        const nextFilteredPodcasts = data.filter(
          (podcast) =>
            podcast.author.toLowerCase().includes(value.toLocaleLowerCase()) ||
            podcast.title.toLowerCase().includes(value.toLocaleLowerCase()),
        );
        setFilteredPodcasts(nextFilteredPodcasts);
      } else {
        setFilteredPodcasts(data);
      }
    }, 300),
    [],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    debouncedFilter(value);
  };

  return (
    <div>
      {status === 'loading' ? (
        <HomeSkeleton />
      ) : (
        <React.Fragment>
          <div className={styles.toolbar}>
            <div className={styles.badge}>
              <Badge>{data.length}</Badge>
            </div>
            <Input onChange={handleInputChange} placeholder='Filter podcasts...'></Input>
          </div>
          <Grid>
            {filteredPodcasts.map((podcast) => (
              <GridItem key={podcast.id} size={3}>
                <Link route={ROUTES.PODCAST} params={{ podcastId: podcast.id }}>
                  <HomeCard
                    image={podcast.images.large}
                    title={podcast.name}
                    author={podcast.author}
                  ></HomeCard>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
export { Home };
