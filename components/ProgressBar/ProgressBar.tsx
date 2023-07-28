'use client';

import React from 'react';

import styles from './styles.module.css';

export const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.progressbar}>
      <div className={styles.loading_bar} style={{ width: `${progress}%` }} />
    </div>
  );
};
