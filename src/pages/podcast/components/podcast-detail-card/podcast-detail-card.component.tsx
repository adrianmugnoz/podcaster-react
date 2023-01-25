import React from 'react';
import { Card, Divider } from 'shared/components';
import { styles } from './podcast-detail-card.css';

type PodcastDetailCardProps = {
  image: string;
  title: string;
  author: string;
  description: string;
};

function PodcastDetailCard({ image, title, author, description }: PodcastDetailCardProps) {
  return (
    <Card>
      <div className={styles.centered}>
        <img loading='lazy' className={styles.img} src={image} alt={title} />
      </div>
      <Divider />
      <div className={styles.title}>{title}</div>
      <div className={styles.secondaryText}>{`by ${author}`}</div>
      <Divider />
      <div className={styles.descriptionLabel}>Description:</div>
      <div className={`${styles.secondaryText} ${styles.description}`}>{description}</div>
    </Card>
  );
}

export { PodcastDetailCard };
