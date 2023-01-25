import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'shared/components';
import { useOutletPodcast } from '../hooks';
import { styles } from './podcast-player.css';

function PodcastPlayer() {
  const { episodeId } = useParams();
  const { podcast } = useOutletPodcast();
  const episode = podcast.episodes.find((episode) => episode.id === Number(episodeId));

  return (
    <Card>
      <div className={styles.title}>{episode.name}</div>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: episode.description }}
      ></div>
      <div>
        <audio controls>
          <source src={episode.url || episode.previewUrl} type='audio/mpeg' />
          Your browser does not support the audio element.
        </audio>
      </div>
    </Card>
  );
}

export default PodcastPlayer;
export { PodcastPlayer };
