import axios from 'axios';
import { TPodcast, TEpisodeResponse, TEntryResponse } from './models';

const API_BASE = 'https://itunes.apple.com';

const generateCorsApiUrl = (endpoint: string): string => {
  return `https://api.allorigins.win/get?url=${encodeURIComponent(`${API_BASE}${endpoint}`)}`;
};

const fetchPodcastList = async (): Promise<TPodcast[]> => {
  const url = generateCorsApiUrl('/us/rss/toppodcasts/limit=100/genre=1310/json');
  const { data } = await axios.get(url);
  const parsedJson = JSON.parse(data?.contents);
  const entries = parsedJson.feed.entry;
  const preparedData = entries.map((entry: TEntryResponse) => {
    return {
      name: entry['im:name'].label,
      images: {
        small: entry['im:image'].find((image) => image.attributes.height === '55')?.label,
        medium: entry['im:image'].find((image) => image.attributes.height === '60')?.label,
        large: entry['im:image'].find((image) => image.attributes.height === '170')?.label,
      },
      description: entry['summary'].label,
      title: entry['title'].label,
      id: entry['id'].attributes['im:id'],
      author: entry['im:artist'].label,
    };
  });
  return preparedData;
};

const fetchPodcastDetail = async (signal: AbortSignal, podcastId: string): Promise<TPodcast> => {
  const url = generateCorsApiUrl(`/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`);
  const { data } = await axios.get(url, { signal });
  const parsedJson: TEpisodeResponse[] = JSON.parse(data?.contents).results;
  const podcastJson = parsedJson.find((item) => item.kind === 'podcast');
  const podcastEpisodes = parsedJson.filter((item) => item.kind === 'podcast-episode');
  const preparedData = {
    name: podcastJson.collectionName,
    images: {
      small: podcastJson?.artworkUrl30,
      medium: podcastJson?.artworkUrl60,
      large: podcastJson?.artworkUrl100,
    },
    description: '',
    title: podcastJson.trackName,
    id: podcastJson.collectionId,
    author: podcastJson.artistName,
    episodes: podcastEpisodes.map((episode) => ({
      url: episode.episodeUrl || null,
      previewUrl: episode.previewUrl,
      name: episode.trackName,
      timeMillis: episode.episodeTimeMillis || episode.trackTimeMillis,
      extension: episode.episodeFileExtension,
      id: episode.trackId,
      description: episode.description,
      date: episode.releaseDate,
      podcastId,
    })),
  };
  return preparedData;
};

export { fetchPodcastList, fetchPodcastDetail };
