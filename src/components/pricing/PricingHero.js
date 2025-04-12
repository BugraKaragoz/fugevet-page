'use client';

import { useEffect, useRef } from 'react';
import styles from './PricingHero.module.css';
import Link from 'next/link';

const PricingHero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = containerRef.current.querySelectorAll(`.${styles.animatable}`);
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={`${styles.heroContent} ${styles.animatable}`}>
        <h1 className={styles.heroTitle}>FugeVet Paketleri</h1>
        <p className={styles.heroDescription}>
          İşletmenizin ihtiyaçlarına uygun paketi seçin ve hemen kullanmaya başlayın.
          Tüm paketlerde 14 gün ücretsiz deneme süresi mevcuttur.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/register" className={styles.primaryButton}>
            Ücretsiz Deneyin
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            İletişime Geçin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingHero; 