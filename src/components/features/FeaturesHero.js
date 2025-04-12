'use client';

import { useEffect, useRef } from 'react';
import styles from './FeaturesHero.module.css';
import Link from 'next/link';

const FeaturesHero = () => {
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.content}>
        <h1 className={`${styles.title} ${styles.animatable}`}>
          <span className={styles.accent}>FugeVet</span> Veteriner Programı içerisinde neler var?
        </h1>
        <p className={`${styles.subtitle} ${styles.animatable}`}>
          Veteriner klinikleriniz için özel olarak tasarlanmış, her ihtiyacınızı karşılayan kapsamlı çözümler
        </p>
      </div>
      
      <div className={`${styles.heroImage} ${styles.animatable}`}>
        <div className={styles.imageOverlay}></div>
        <div className={styles.imageContainer}>
          <img 
            src="/assets/features/features-hero.svg" 
            alt="FugeVet veteriner yazılımı arayüzü" 
            width={600} 
            height={400}
          />
        </div>
      </div>

      <div className={`${styles.featuresGrid} ${styles.animatable}`}>
        <div className={styles.featureCard} onClick={() => scrollToSection('randevu')}>
          <div className={styles.featureCardImage}>
            <img 
              src="/assets/features/randevu.svg" 
              alt="Akıllı Randevu Yönetimi" 
              width={300}
              height={200}
            />
          </div>
          <h3 className={styles.featureCardTitle}>Akıllı Randevu Yönetimi</h3>
          <p className={styles.featureCardDesc}>
            Müşteri ve tedaviklerinizin bakiyesini anında görün, ödeme ve tahsilatlarınızı takip edin.
          </p>
          <a className={styles.featureCardLink}>Detayı İnceleyin <span>→</span></a>
        </div>

        <div className={styles.featureCard} onClick={() => scrollToSection('hatirlatici')}>
          <div className={styles.featureCardImage}>
            <img 
              src="/assets/features/hatirlatici.svg" 
              alt="Otomatik Hatırlatıcılar" 
              width={300}
              height={200}
            />
          </div>
          <h3 className={styles.featureCardTitle}>Otomatik Hatırlatıcılar</h3>
          <p className={styles.featureCardDesc}>
            Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.
          </p>
          <a className={styles.featureCardLink}>Detayı İnceleyin <span>→</span></a>
        </div>

        <div className={styles.featureCard} onClick={() => scrollToSection('muhasebe')}>
          <div className={styles.featureCardImage}>
            <img 
              src="/assets/features/muhasebe.svg" 
              alt="Muhasebe Yönetimi" 
              width={300}
              height={200}
            />
          </div>
          <h3 className={styles.featureCardTitle}>Muhasebe Yönetimi</h3>
          <p className={styles.featureCardDesc}>
            Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.
          </p>
          <a className={styles.featureCardLink}>Detayı İnceleyin <span>→</span></a>
        </div>

        <div className={styles.featureCard} onClick={() => scrollToSection('bulut')}>
          <div className={styles.featureCardImage}>
            <img 
              src="/assets/features/bulut.svg" 
              alt="Bulut Teknoloji" 
              width={300}
              height={200}
            />
          </div>
          <h3 className={styles.featureCardTitle}>Bulut Teknoloji</h3>
          <p className={styles.featureCardDesc}>
            Tüm verileriniz bulut sunucularda güvenli bir şekilde saklanır ve izinsiz erişimi engeller.
          </p>
          <a className={styles.featureCardLink}>Detayı İnceleyin <span>→</span></a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero; 