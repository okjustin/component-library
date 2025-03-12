import React from 'react';
import styles from './FlipCard.module.scss';

const FlipCard = ({ children }) => {
  const [front, back] = React.Children.toArray(children);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardInner}>
        {/* Card Front Base */}
        <div className={styles.cardFront}>
          <div className={styles.cardContent}>
            {front}
          </div>
        </div>

        {/* Card Back Base */}
        <div className={styles.cardBack}>
          <div className={styles.cardContent}>
            {back}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
