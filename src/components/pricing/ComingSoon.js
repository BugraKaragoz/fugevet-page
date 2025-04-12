'use client';

import { useEffect } from 'react';
import styles from './ComingSoon.module.css';

const ComingSoon = () => {
  // Animasyon için basit bir efekt
  useEffect(() => {
    const titleElement = document.querySelector(`.${styles.comingSoonTitle}`);
    const subtitleElement = document.querySelector(`.${styles.comingSoonSubtitle}`);
    
    if (titleElement) {
      setTimeout(() => {
        titleElement.classList.add(styles.visible);
      }, 300);
    }
    
    if (subtitleElement) {
      setTimeout(() => {
        subtitleElement.classList.add(styles.visible);
      }, 800);
    }
  }, []);

  return (
    <div className={styles.comingSoonContainer}>
      <div className={styles.comingSoonContent}>
        <h1 className={styles.comingSoonTitle}>Fiyatlar</h1>
        <div className={styles.titleUnderline}></div>
        <h2 className={styles.comingSoonSubtitle}>Yakında Sizlerleyiz</h2>
        
        <div className={styles.animatedElements}>
          <div className={styles.pulse}></div>
          <div className={styles.floatingElement1}></div>
          <div className={styles.floatingElement2}></div>
          <div className={styles.floatingElement3}></div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 