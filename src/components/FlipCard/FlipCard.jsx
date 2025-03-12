import React from "react";
import styles from "./FlipCard.module.scss";

const FlipCard = ({ children }) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

const Front = ({ children }) => (
  <div className={styles.front}>{children}</div>
);

const Back = ({ children }) => (
  <div className={styles.back}>{children}</div>
);

FlipCard.Front = Front;
FlipCard.Back = Back;

export default FlipCard;
