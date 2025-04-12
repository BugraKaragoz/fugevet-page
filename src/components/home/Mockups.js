'use client';
import { useMemo, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Mockups.module.css';

const Mockups = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Sayfanın yüklenmesinden sonra animasyonu başlat
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mockupları istediğiniz sırayla tanımlayın (altta olacaklar önce)
  const mockupConfig = useMemo(() => [
    // 1. mockup (en altta)
    {
      id: 1,
      src: "/assets/1.png",
      alt: "Mockup 1",
      width: 700,
      height: 700,
      position: { top: '190px', right: '-10px' },
      delay: 0.3,
      animationClass: styles.floatAnimation1
    },
    // 2. mockup (ortada)
    {
      id: 2,
      src: "/assets/2.png",
      alt: "Mockup 2",
      width: 500,
      height: 500,
      position: { top: '450px', right: '240px' },
      style: { transformOrigin: 'center right' },
      delay: 0.6,
      animationClass: styles.floatAnimation2
    },
    // 3. mockup (üstte)
    {
      id: 3,
      src: "/assets/3.png",
      alt: "Mockup 3",
      width: 330,
      height: 330,
      position: { top: '530px', right: '-37px' },
      delay: 0.9,
      animationClass: styles.floatAnimation3
    },
    // 4. mockup (en üstte)
    {
      id: 4,
      src: "/assets/4.png",
      alt: "Mockup 4",
      width: 120,
      height: 150,
      position: { top: '600px', right: '230px' },
      delay: 1.2,
      animationClass: styles.floatAnimation4
    },
  ], []);

  return (
    <div className={styles.mockupsContainer}>
      {/* Altta olması gerekenleri önce render et */}
      {mockupConfig.map((mockup, index) => (
        <div 
          key={mockup.id}
          className={`${styles.mockup} ${isVisible ? styles.visible : ''} ${mockup.animationClass}`}
          style={{
            position: 'absolute',
            top: mockup.position.top,
            right: mockup.position.right,
            zIndex: 10 + index,
            transitionDelay: `${mockup.delay}s`,
            ...(mockup.style || {})
          }}
        >
          <Image 
            src={mockup.src}
            alt={mockup.alt}
            width={mockup.width}
            height={mockup.height}
            priority
            unoptimized={true}
            className={styles.mockupImage}
          />
        </div>
      ))}
    </div>
  );
};

export default Mockups;
