'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './HowToUse.module.css';

const HowToUse = () => {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);

  // Adım bilgileri
  const steps = [
    {
      id: 1,
      title: 'Ücretsiz Kaydolun',
      description: 'Hızlı bir şekilde kaydolun ve sistemi 14 gün ücretsiz kullanmaya başlayın.',
      icon: '📝',
      color: 'rgba(33, 150, 243, 0.15)',
      iconBg: 'linear-gradient(135deg, #0062ff, #00a3ff)',
      bgColor: '#e3f2fd'
    },
    {
      id: 2,
      title: 'Hesabınızı Doğrulayın',
      description: 'E-posta adresinizi doğrulayarak hesabınızı aktifleştirin ve tüm özelliklere erişin.',
      icon: '✓',
      color: 'rgba(76, 175, 80, 0.15)',
      iconBg: 'linear-gradient(135deg, #00c853, #69f0ae)',
      bgColor: '#e8f5e9'
    },
    {
      id: 3,
      title: 'Hazırsınız!',
      description: 'Artık veteriner klinik yönetim sistemini kullanmaya başlayabilirsiniz.',
      icon: '🚀',
      color: 'rgba(255, 152, 0, 0.15)',
      iconBg: 'linear-gradient(135deg, #ff6d00, #ffab40)',
      bgColor: '#fff3e0'
    },
  ];

  // Scroll animasyonu için
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // SVG vektör içerikleri
  const renderRegisterSVG = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="20" width="200" height="130" rx="10" fill="white" stroke="#0062ff" strokeWidth="2"/>
      <rect x="120" y="40" width="160" height="15" rx="3" fill="#e3f2fd"/>
      <rect x="120" y="65" width="100" height="15" rx="3" fill="#e3f2fd"/>
      <rect x="120" y="90" width="80" height="15" rx="3" fill="#e3f2fd"/>
      <rect x="120" y="115" width="120" height="15" rx="3" fill="#0062ff" opacity="0.8"/>
      <circle cx="160" cy="150" r="15" fill="#0062ff"/>
      <path d="M154 150L158 154L166 146" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const renderVerifySVG = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="150" y="10" width="100" height="180" rx="15" fill="white" stroke="#00c853" strokeWidth="2"/>
      <rect x="155" y="15" width="90" height="160" rx="10" fill="#e8f5e9"/>
      <rect x="165" y="40" width="70" height="60" rx="5" fill="white"/>
      <path d="M185 70L195 80L215 60" stroke="#00c853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="165" y="110" width="70" height="10" rx="3" fill="white"/>
      <rect x="165" y="130" width="70" height="10" rx="3" fill="white"/>
      <rect x="165" y="150" width="70" height="10" rx="3" fill="#00c853" opacity="0.8"/>
    </svg>
  );

  const renderReadySVG = () => (
    <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="150" y="10" width="100" height="180" rx="15" fill="white" stroke="#ff6d00" strokeWidth="2"/>
      <rect x="155" y="15" width="90" height="160" rx="10" fill="#fff3e0"/>
      <rect x="175" y="25" width="50" height="10" rx="5" fill="white"/>
      <rect x="165" y="45" width="70" height="10" rx="3" fill="white"/>
      <rect x="165" y="60" width="70" height="10" rx="3" fill="white"/>
      <rect x="165" y="75" width="70" height="10" rx="3" fill="white"/>
      <rect x="165" y="95" width="70" height="60" rx="5" fill="white"/>
      <path d="M200 110L200 140" stroke="#ff6d00" strokeWidth="2"/>
      <path d="M185 125L215 125" stroke="#ff6d00" strokeWidth="2"/>
      <circle cx="200" cy="170" r="10" fill="#ff6d00"/>
    </svg>
  );

  // Her adım için uygun SVG'yi seçen fonksiyon
  const renderStepSVG = (stepId) => {
    switch (stepId) {
      case 1:
        return renderRegisterSVG();
      case 2:
        return renderVerifySVG();
      case 3:
        return renderReadySVG();
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} className={styles.howToUseSection}>
      <div className={styles.container}>
        <div className={`${styles.sectionHeader} ${isVisible ? styles.animate : ''}`}>
          <h2 className={styles.sectionTitle}>Nasıl Kullanılır?</h2>
          <p className={styles.sectionSubtitle}>
            Sistemi kullanmaya başlamak için sadece birkaç adım yeterli.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (stepsRef.current[index] = el)}
              className={`${styles.stepCard} ${isVisible ? styles.animate : ''}`}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                backgroundColor: 'white',
                borderTop: `4px solid ${step.color.replace('0.15', '1')}` 
              }}
            >
              <div className={styles.stepContent}>
                <div 
                  className={styles.stepIconContainer}
                  style={{ background: step.iconBg }}
                >
                  <span role="img" aria-label={step.title} className={styles.stepIcon}>
                    {step.icon}
                  </span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              <div 
                className={styles.stepImageContainer}
                style={{ background: step.bgColor }}
              >
                {renderStepSVG(step.id)}
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.ctaContainer} ${isVisible ? styles.animate : ''}`}>
          <div className={styles.ctaBgBlur}></div>
          <h3 className={styles.ctaTitle}>ÜCRETSİZ DENEYİN</h3>
          <p className={styles.ctaDescription}>
            Veteriner kliniğiniz için Türkiye'nin en çok sevilen ve en gelişmiş klinik yazılımını deneyin.
          </p>
          <a href="/trial" className={styles.ctaButton}>
            Hemen Ücretsiz Deneyin
            <span className={styles.arrowIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowToUse; 