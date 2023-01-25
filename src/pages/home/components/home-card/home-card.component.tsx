import React from 'react';
import { Card } from 'shared/components';
import { styles } from './home-card.css';

type HomeCardProps = {
  image: string;
  title: string;
  author: string;
};

function HomeCard({ image, title, author }: HomeCardProps) {
  return (
    <Card className={styles.card}>
      <div className={styles.homeCard}>
        <div className={styles.image}>
          <img loading='lazy' className={styles.img} src={image} alt={title}></img>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.author}>{`Author: ${author}`}</div>
      </div>
    </Card>
  );
}

export { HomeCard };
