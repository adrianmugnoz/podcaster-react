export type TEpisode = {
  url: string;
  previewUrl: string;
  name: string;
  timeMillis: number;
  extension: string;
  id: number;
  description: string;
  date: string;
  podcastId: string;
};

export type TPodcast = {
  name: string;
  images: { small: string; medium: string; large: string };
  description: string;
  title: string;
  id: string;
  author: string;
  episodes?: TEpisode[];
};

export type TEpisodeResponse = {
  kind: string;
  episodeUrl: string;
  previewUrl: string;
  trackName: string;
  episodeTimeMillis: number;
  trackTimeMillis: number;
  episodeFileExtension: string;
  trackId: number;
  description: string;
  releaseDate: string;
  collectionName: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionId: string;
  artistName: string;
};

export type TImageResponse = {
  attributes: {
    height: string;
  };
  label: string;
};

export type TValueResponse = {
  label: string;
};

export type TEntryResponse = {
  'im:name': TValueResponse;
  'im:image': TImageResponse[];
  summary: TValueResponse;
  title: TValueResponse;
  id: { attributes: { 'im:id': string } };
  'im:artist': TValueResponse;
};
