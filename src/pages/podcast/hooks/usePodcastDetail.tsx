import { useQuery } from '@tanstack/react-query';
import { fetchPodcastDetail } from 'core/services/podcast';

function usePodcastDetail(podcastId: string) {
  return useQuery({
    queryKey: ['podcastDetail', podcastId],
    queryFn: ({ signal }) => fetchPodcastDetail(signal, podcastId),
  });
}

export { usePodcastDetail };
