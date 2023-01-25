import axios from 'axios';
import { TPodcast, TEntryResponse } from './models';

const fetchPodcastList = async (): Promise<TPodcast[]> => {
  const { data } = await axios.get(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
  );
  const entries = data.feed.entry;
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

export { fetchPodcastList };
