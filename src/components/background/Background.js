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

// Baloncuk ayarları - performans için sayıları azalttım
const BUBBLE_CONFIG = {
  count: 10,            // Ekranda maksimum kaç baloncuk olacak - sayıyı azalttım
  minSize: 5,           // Minimum baloncuk boyutu (px)
  maxSize: 25,          // Maksimum baloncuk boyutu (px)
  minSpeed: 0.2,        // Minimum yükselme hızı
  maxSpeed: 0.8,        // Maksimum yükselme hızı
  oscillation: 1.5,     // Yanal sallanma miktarı
  opacity: 0.5,         // Baloncuk opaklığı
};

// Parlayan noktalar ayarları - performans için sayıları azalttım
const GLOW_CONFIG = {
  count: 15,            // Ekranda maksimum kaç nokta olacak - sayıyı azalttım
  minSize: 2,           // Minimum nokta boyutu (px)
  maxSize: 8,           // Maksimum nokta boyutu (px)
  minDuration: 3,       // Minimum parıltı süresi (saniye)
  maxDuration: 8,       // Maksimum parıltı süresi (saniye)
  color: '#ffffff',     // Parıltı rengi
};

const Background = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className={styles.background}>
      <div className={styles.blobContainer}>
        {/* Main large blob */}
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
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="20" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path 
            className={styles.animatedPath}
            fill="url(#mainGradient)"
            filter="url(#glow)"
            d="M400,320 C530,320 650,200 650,180 C650,120 580,40 400,40 C250,40 180,80 180,180 C180,280 270,320 400,320 Z"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M400,320 C530,320 650,200 650,180 C650,120 580,40 400,40 C250,40 180,80 180,180 C180,280 270,320 400,320 Z;
                M400,320 C500,350 630,220 630,160 C630,90 550,60 400,60 C250,60 200,100 200,200 C200,280 300,290 400,320 Z;
                M400,340 C550,340 670,220 670,160 C670,100 550,20 400,20 C230,20 160,100 160,200 C160,300 250,340 400,340 Z;
                M400,320 C530,320 650,200 650,180 C650,120 580,40 400,40 C250,40 180,80 180,180 C180,280 270,320 400,320 Z
              "
            />
          </path>
        </svg>

        {/* Secondary blob */}
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
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M300,250 C380,250 450,200 450,150 C450,90 400,50 300,50 C200,50 150,90 150,150 C150,220 220,250 300,250 Z;
                M300,270 C400,270 470,210 470,160 C470,80 380,30 300,30 C200,30 130,100 130,160 C130,230 200,270 300,270 Z;
                M300,230 C370,230 430,190 430,150 C430,100 380,70 300,70 C220,70 170,110 170,150 C170,200 230,230 300,230 Z;
                M300,250 C380,250 450,200 450,150 C450,90 400,50 300,50 C200,50 150,90 150,150 C150,220 220,250 300,250 Z
              "
            />
          </path>
        </svg>

        {/* Third blob */}
        <svg
          className={styles.thirdBlob}
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            bottom: BLOB_CONFIG.third.bottom,
            right: BLOB_CONFIG.third.right,
            width: BLOB_CONFIG.third.width,
            height: BLOB_CONFIG.third.height,
            opacity: BLOB_CONFIG.third.opacity
          }}
        >
          <defs>
            <linearGradient id="thirdGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b00" />
              <stop offset="100%" stopColor="#ff9500" />
            </linearGradient>
          </defs>
          <path
            className={styles.animatedPath}
            fill="url(#thirdGradient)"
            d="M200,180 C250,180 280,150 280,120 C280,80 250,50 200,50 C150,50 120,80 120,120 C120,150 150,180 200,180 Z"
          >
            <animate
              attributeName="d"
              dur="18s"
              repeatCount="indefinite"
              values="
                M200,180 C250,180 280,150 280,120 C280,80 250,50 200,50 C150,50 120,80 120,120 C120,150 150,180 200,180 Z;
                M200,190 C260,190 290,150 290,110 C290,70 240,40 200,40 C150,40 110,70 110,110 C110,150 140,190 200,190 Z;
                M200,170 C240,170 270,140 270,120 C270,90 250,60 200,60 C160,60 130,90 130,120 C130,140 160,170 200,170 Z;
                M200,180 C250,180 280,150 280,120 C280,80 250,50 200,50 C150,50 120,80 120,120 C120,150 150,180 200,180 Z
              "
            />
          </path>
        </svg>

        {/* Floating particles - Only render on client-side to prevent hydration mismatch */}
        {isClient && (
          <div className={styles.particles}>
            {Array(20).fill().map((_, i) => {
              // Generate consistent values for each particle
              const particle = {
                delay: Math.random() * 5,
                duration: 5 + Math.random() * 15,
                size: 3 + Math.random() * 7,
                left: Math.random() * 100,
                top: Math.random() * 100,
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
