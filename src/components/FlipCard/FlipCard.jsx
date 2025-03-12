import React from 'react';
import styles from './FlipCard.module.scss';

const FlipCard = ({ children }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardInner}>{children}</div>
    </div>
  );
};

const Front = ({ children }) => (
  <div className={styles.cardFront}>
    <div className={styles.cardContent}>{children}</div>
  </div>
);

const Back = ({ children }) => (
  <div className={styles.cardBack}>
    <div className={styles.cardContent}>{children}</div>
  </div>
);

FlipCard.Front = Front;
FlipCard.Back = Back;

export default FlipCard;
