import { useQuery } from '@tanstack/react-query';
import { fetchPodcastDetail } from 'core/services/podcast';
import { QUERIES } from '../podcast.queries';

function usePodcastDetail(podcastId: string) {
  return useQuery({
    queryKey: [QUERIES.PODCAST_DETAIL, podcastId],
    queryFn: ({ signal }) => fetchPodcastDetail(signal, podcastId),
  });
}

export { usePodcastDetail };
