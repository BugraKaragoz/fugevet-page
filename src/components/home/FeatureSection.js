'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  const headingRef = useRef(null);
  
  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add(styles.animate);
    }
  }, []);
  
  return (
    <div className={styles.featureContainer}>
      <div className={styles.titleBlock}>
        <div className={styles.headingContainer} ref={headingRef}>
          <h1 className={styles.title}>
            <span className={`${styles.topTitle} ${styles.animateTitle}`}>Klinik Zekânız Artık</span>
            <span className={`${styles.mainTitle} ${styles.animateTitle}`}>
              <span className={styles.highlight}>FugeVet</span>
              <span className={styles.gradientText}>'de!</span>
            </span>
          </h1>
        </div>
        
        <p className={styles.description}>
          Randevudan reçeteye, hastadan hatırlatmaya… Tüm klinik yönetimi bir tık kadar yakın.
        </p>
        
        <div className={styles.ctaButton}>
          <Link href="/trial" className={styles.tryButton}>
            Hemen Ücretsiz Deneyin!
            <span className={styles.arrowIcon}>
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </div>
        
        <div className={styles.appButtons}>
          <Link href="https://apps.apple.com/" target="_blank" className={styles.appButton}>
            <div className={`${styles.modernStoreButton} ${styles.animatedBorder}`}>
              <div className={styles.storeIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7601 19.2499C18.1351 20.4999 17.4851 21.7424 16.3726 21.7499C15.2601 21.7574 14.9251 21.0099 13.6426 21.0099C12.3601 21.0099 11.9851 21.7349 10.9351 21.7574C9.83256 21.7799 9.04506 20.3674 8.41256 19.1249C7.11006 16.5599 6.09756 11.7449 7.42506 8.53237C8.08756 6.93237 9.42506 5.92487 10.8826 5.92487C12.3076 5.92487 13.2826 6.67487 14.5576 6.67487C15.8176 6.67487 16.5901 5.92487 18.2176 5.92487C19.5351 5.92487 20.7151 6.76487 21.3751 8.07737C17.2201 9.90487 17.9026 15.5074 21.8776 16.6724C21.3451 17.8724 20.7201 19.0574 19.7501 19.9974C18.7801 20.9374 17.9176 21.7349 16.4026 21.7499C14.8876 21.7649 14.4426 20.9974 13.6426 20.9974C12.8426 20.9974 12.3301 21.7499 10.9501 21.7499" fill="#007AFF" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.0827 2.25C15.6152 2.91 15.9152 3.76 15.8227 4.62C14.9377 4.67 14.0977 4.32 13.4777 3.65C12.8577 2.99 12.5327 2.16 12.6502 1.25C13.5502 1.25 14.4252 1.61 15.0827 2.25Z" fill="#007AFF" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.storeTextNew}>
                <span>GET IT ON</span>
                <span>App Store</span>
              </div>
            </div>
          </Link>
          <Link href="https://play.google.com/" target="_blank" className={styles.appButton}>
            <div className={`${styles.modernStoreButton} ${styles.animatedBorder}`}>
              <div className={styles.storeIcon}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.9589 12.0419L6.85229 20.5019C6.4665 20.297 6.14199 19.9889 5.91732 19.6124C5.69266 19.2358 5.57583 18.8061 5.57729 18.3687V5.63187C5.57583 5.1944 5.69266 4.76472 5.91732 4.38818C6.14199 4.01165 6.4665 3.70349 6.85229 3.49869L13.9589 12.0419Z" fill="#EA4335" stroke="#EA4335" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M6.85229 3.49852C7.36254 3.21589 7.94699 3.07092 8.53992 3.07837C9.13285 3.08582 9.71364 3.24545 10.2167 3.54102L17.5861 7.81602L13.9589 12.0417L6.85229 3.49852Z" fill="#FBBC05" stroke="#FBBC05" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M6.85229 20.5016C7.36213 20.785 7.94665 20.9304 8.53978 20.9234C9.13292 20.9163 9.71402 20.757 10.2175 20.4616L17.5876 16.1866L13.9596 11.9616L6.85229 20.5016Z" fill="#34A853" stroke="#34A853" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M17.5864 16.1871L20.5161 14.3631C20.8861 14.1499 21.1925 13.8466 21.4035 13.4817C21.6147 13.1168 21.7235 12.7026 21.7186 12.2816C21.7293 11.8626 21.6216 11.4496 21.4079 11.0885C21.1942 10.7273 20.8841 10.4303 20.5116 10.2263L17.5864 8.40386L13.9604 12.0421L17.5864 16.1871Z" fill="#4285F4" stroke="#4285F4" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.storeTextNew}>
                <span>GET IT ON</span>
                <span>Google Play</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection; 