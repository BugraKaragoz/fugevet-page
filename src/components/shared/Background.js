'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Background.module.css';

// Blob konum ve boyut ayarları - manuel değiştirilebilir
const BLOB_CONFIG = {
  main: {
    top: '-50%',
    right: '-30%',
    width: '120%',
    height: '120%',
    opacity: 1
  },
  secondary: {
    top: '-5%',
    left: '-10%',
    width: '70%',
    height: '70%',
    opacity: 0.3
  },
  third: {
    bottom: '-50%',
    right: '-60%',
    width: '150%',
    height: '150%',
    opacity: 0.15
  }
};

// Parlayan noktalar ayarları - performans için sayıları azalttım
const GLOW_CONFIG = {
  count: 8,            // Ekranda maksimum kaç nokta olacak - performans için azalttım
  minSize: 2,           // Minimum nokta boyutu (px)
  maxSize: 8,           // Maksimum nokta boyutu (px)
  minDuration: 3,       // Minimum parıltı süresi (saniye)
  maxDuration: 8,       // Maksimum parıltı süresi (saniye)
  color: '#ffffff',     // Parıltı rengi
};

const Background = () => {
  const [isClient, setIsClient] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const bgRef = useRef(null);
  
  useEffect(() => {
    setIsClient(true);
    
    // IntersectionObserver ile görünür olduğunda yükleme
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (bgRef.current) {
      observer.observe(bgRef.current);
    }
    
    return () => {
      if (bgRef.current) {
        observer.disconnect();
      }
    };
  }, []);
  
  return (
    <div className={styles.background} ref={bgRef}>
      <div className={styles.blobContainer}>
        {/* Main large blob - sadece görünür olduğunda render et */}
        {isInView && (
          <svg
            className={styles.mainBlob}
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              top: BLOB_CONFIG.main.top,
              right: BLOB_CONFIG.main.right,
              width: BLOB_CONFIG.main.width,
              height: BLOB_CONFIG.main.height,
              opacity: BLOB_CONFIG.main.opacity
            }}
          >
            <defs>
              <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0062cc" />
                <stop offset="100%" stopColor="#0095ff" />
              </linearGradient>
            </defs>
            <path 
              className={styles.animatedPath}
              fill="url(#mainGradient)"
              d="M400,320 C530,320 650,200 650,180 C650,120 580,40 400,40 C250,40 180,80 180,180 C180,280 270,320 400,320 Z"
            />
          </svg>
        )}

        {/* Secondary blob - sadece görünür olduğunda render et */}
        {isInView && (
          <svg
            className={styles.secondaryBlob}
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              top: BLOB_CONFIG.secondary.top,
              left: BLOB_CONFIG.secondary.left,
              width: BLOB_CONFIG.secondary.width,
              height: BLOB_CONFIG.secondary.height,
              opacity: BLOB_CONFIG.secondary.opacity
            }}
          >
            <defs>
              <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6a3093" />
                <stop offset="100%" stopColor="#a044ff" />
              </linearGradient>
            </defs>
            <path
              className={styles.animatedPath}
              fill="url(#secondaryGradient)"
              d="M300,250 C380,250 450,200 450,150 C450,90 400,50 300,50 C200,50 150,90 150,150 C150,220 220,250 300,250 Z"
            />
          </svg>
        )}

        {/* Floating particles - Only render on client-side and when in view */}
        {isClient && isInView && (
          <div className={styles.particles}>
            {Array(GLOW_CONFIG.count).fill().map((_, i) => {
              const particle = {
                delay: (i % 5) * 1,  // Deterministic delay for better performance
                duration: 5 + (i % 3) * 2,
                size: GLOW_CONFIG.minSize + (i % 3) * 2,
                left: (i * 10) % 100,  // Distributed across viewport width
                top: (i * 12) % 100,   // Distributed across viewport height
              };
              
              return (
                <div 
                  key={i} 
                  className={styles.particle}
                  style={{
                    '--delay': `${particle.delay}s`,
                    '--duration': `${particle.duration}s`,
                    '--size': `${particle.size}px`,
                    '--left': `${particle.left}%`,
                    '--top': `${particle.top}%`,
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Background;
