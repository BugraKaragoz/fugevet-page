'use client';
import { useMemo } from 'react';
import Image from 'next/image';
import styles from './Mockups.module.css';

const Mockups = () => {
  // Mockupları istediğiniz sırayla tanımlayın (altta olacaklar önce)
  const mockupConfig = useMemo(() => [
    // 1. mockup (en altta)
    {
      id: 1,
      src: "/assets/1.png",
      alt: "Mockup 1",
      width: 1000,
      height: 1000,
      position: { top: '-120px', right: '-200px' },
    },
    // 2. mockup (ortada)
    {
      id: 2,
      src: "/assets/2.png",
      alt: "Mockup 2",
      width: 700,
      height: 700,
      position: { top: '400px', right: '-138px' },
      style: { transformOrigin: 'center right' }
    },
    // 3. mockup (üstte)
    {
      id: 3,
      src: "/assets/3.png",
      alt: "Mockup 3",
      width: 390,
      height: 530,
      position: { top: '520px', right: '240px' },
    },
    // 4. mockup (en üstte)
    {
      id: 4,
      src: "/assets/4.png",
      alt: "Mockup 4",
      width: 390,
      height: 530,
      position: { top: '550px', right: '220px' },
    },
  ], []);

  return (
    <div className={styles.mockupsContainer}>
      {/* Altta olması gerekenleri önce render et */}
      {mockupConfig.map((mockup, index) => (
        <div 
          key={mockup.id}
          className={styles.mockup}
          style={{
            position: 'absolute',
            top: mockup.position.top,
            right: mockup.position.right,
            zIndex: 10 + index,
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
