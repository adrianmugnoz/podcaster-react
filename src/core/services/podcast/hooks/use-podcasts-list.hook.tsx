import { useQuery } from '@tanstack/react-query';
import { QUERIES } from '../podcast.queries';
import { fetchPodcastList } from '../podcast.service';

function usePodcastList() {
  return useQuery({
    queryKey: [QUERIES.PODCAST_LIST],
    queryFn: fetchPodcastList,
  });
}

export { usePodcastList };
