import React from 'react';
import { Card } from 'shared/components';
import { Table, createColumnHelper } from 'shared/components/table';
import { Link } from 'core/components/link';
import { useOutletPodcast } from '../hooks';
import { TEpisode } from 'core/services/podcast';
import { convertMillisecondsToHoursMinutesSeconds, formatDate } from 'shared/utils';
import { styles } from './podcast-episodes.css';
import { ROUTES } from 'core/router';

const columnHelper = createColumnHelper<TEpisode>();
const columns = [
  columnHelper.accessor('name', {
    header: () => 'Title',
    cell: (info) => {
      return (
        <Link
          className={styles.link}
          route={ROUTES.EPISODE}
          params={{
            podcastId: info.row.original.podcastId,
            episodeId: info.row.original.id,
          }}
        >
          {info.getValue()}
        </Link>
      );
    },
  }),
  columnHelper.accessor('date', {
    id: 'lastName',
    cell: (info) => formatDate(info.getValue()),
    header: () => 'Date',
  }),
  columnHelper.accessor('timeMillis', {
    header: () => 'Duration',
    cell: (info) => convertMillisecondsToHoursMinutesSeconds(info.getValue()),
  }),
];

function PodcastEpisodes() {
  const { podcast } = useOutletPodcast();

  return (
    <div>
      <Card>
        <div className={styles.episodes}>{`Episodes: ${podcast?.episodes.length}`}</div>
      </Card>
      <div className={styles.spacer}></div>
      <Card>
        <Table data={podcast.episodes} columns={columns}></Table>
      </Card>
    </div>
  );
}

export default PodcastEpisodes;
export { PodcastEpisodes };
