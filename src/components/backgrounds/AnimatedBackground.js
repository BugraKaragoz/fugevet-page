'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const backgroundRef = useRef(null);

  // Scroll pozisyonunu takip et
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll değişikliğinde animasyon elemanlarını hareket ettir
  useEffect(() => {
    if (backgroundRef.current) {
      // Dekoratif elementleri seç
      const decorElements = backgroundRef.current.querySelectorAll(
        `.${styles.decorDot}, .${styles.decorCircle}, .${styles.decorPaw}, .${styles.decorStar}, .${styles.decorWave}, .${styles.decorDot2}, .${styles.decorCircle2}, .${styles.decorPaw2}`
      );
      
      // Her bir elemana scroll'a bağlı transformasyon uygula
      decorElements.forEach(elem => {
        const speed = elem.dataset.speed || 0.1;
        const direction = elem.dataset.direction || 1;
        const moveY = scrollY * speed * direction;
        elem.style.transform = `translateY(${moveY}px)`;
      });
    }
  }, [scrollY]);

  return (
    <section className={styles.backgroundSection} ref={backgroundRef}>
      {/* Dekoratif elementler */}
      <div className={styles.decorDot} data-speed="0.03" data-direction="1"></div>
      <div className={styles.decorCircle} data-speed="0.05" data-direction="-1"></div>
      <div className={styles.decorPaw} data-speed="0.07" data-direction="1"></div>
      
      {/* Ek dekoratif elementler - dağınık olması için */}
      <div className={styles.decorStar} data-speed="0.04" data-direction="-1"></div>
      <div className={styles.decorWave} data-speed="0.02" data-direction="1"></div>
      <div className={styles.decorDot2} data-speed="0.06" data-direction="-1"></div>
      <div className={styles.decorCircle2} data-speed="0.03" data-direction="1"></div>
      <div className={styles.decorPaw2} data-speed="0.05" data-direction="-1"></div>
      
      {/* İçerik */}
      {children}
    </section>
  );
};

export default AnimatedBackground; 