'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const backgroundRef = useRef(null);
  const ticking = useRef(false);
  const elementsCache = useRef(new Map());

  // Scroll pozisyonunu takip et - throttled
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll değişikliğinde animasyon elemanlarını hareket ettir - optimized
  useEffect(() => {
    if (backgroundRef.current) {
      // Eğer daha önce önbelleğe alınmadıysa, elementleri önbelleğe al
      if (elementsCache.current.size === 0) {
        const elements = backgroundRef.current.querySelectorAll(
          `.${styles.decorDot}, .${styles.decorCircle}, .${styles.decorPaw}, 
            .${styles.decorStar}, .${styles.decorWave}, .${styles.decorDot2}, 
            .${styles.decorCircle2}, .${styles.decorPaw2}`
        );
        
        elements.forEach(elem => {
          const speed = elem.dataset.speed || 0.1;
          const direction = elem.dataset.direction || 1;
          elementsCache.current.set(elem, { speed, direction });
        });
      }
      
      // Önbelleğe alınan elementleri transform et
      elementsCache.current.forEach((data, elem) => {
        const moveY = scrollY * data.speed * data.direction;
        elem.style.transform = `translateY(${moveY}px)`;
      });
    }
  }, [scrollY]);

  return (
    <section className={styles.backgroundSection} ref={backgroundRef}>
      {/* Dekoratif elementler - azaltılmış sayıda */}
      <div className={styles.decorDot} data-speed="0.03" data-direction="1"></div>
      <div className={styles.decorCircle} data-speed="0.05" data-direction="-1"></div>
      
      {/* Mobil cihazlarda bazı decorative öğeleri rendering etmiyoruz */}
      <div className={`${styles.decorPaw} ${styles.desktopOnly}`} data-speed="0.07" data-direction="1"></div>
      <div className={`${styles.decorStar} ${styles.desktopOnly}`} data-speed="0.04" data-direction="-1"></div>
      <div className={`${styles.decorWave} ${styles.desktopOnly}`} data-speed="0.02" data-direction="1"></div>
      
      {/* İçerik */}
      {children}
    </section>
  );
};

export default AnimatedBackground; 