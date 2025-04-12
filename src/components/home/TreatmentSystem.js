'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './TreatmentSystem.module.css';

const TreatmentSystem = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeScreen, setActiveScreen] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoScrollRef = useRef(null);
  const phoneFrameRef = useRef(null);

  // Screen contents - each screen has an image, title, description, and features
  const screenContents = [
    {
      id: 1,
      image: '/assets/features/dashboard-mockup.svg',
      title: 'Klinik Yönetim Paneli',
      description: 'Tüm klinik verilerini tek bir ekranda görüntüleyin. Performans metriklerini takip edin ve iş akışınızı optimize edin.',
      features: [
        { id: 1, text: 'Klinik performans göstergeleri', icon: '/assets/features/rapor-icon.svg' },
        { id: 2, text: 'Görev ve hasta yönetimi', icon: '/assets/features/hasta-icon.svg' },
        { id: 3, text: 'Veri güvenliği ve yedekleme', icon: '/assets/features/sistem-icon.svg' }
      ]
    },
    {
      id: 2,
      image: '/assets/features/statistics-mockup.svg',
      title: 'İstatistik ve Analizler',
      description: 'Kapsamlı istatistikler ve grafiklerle kliniğinizin performansını analiz edin. Veri odaklı kararlar alın.',
      features: [
        { id: 1, text: 'Görsel analiz grafikleri', icon: '/assets/features/rapor-icon.svg' },
        { id: 2, text: 'Gelir ve hasta istatistikleri', icon: '/assets/features/sistem-icon.svg' },
        { id: 3, text: 'Özelleştirilebilir raporlar', icon: '/assets/features/insan-icon.svg' }
      ]
    },
    {
      id: 3,
      image: '/assets/features/records-mockup.svg',
      title: 'Hasta Kayıt Sistemi',
      description: 'Hastaları kolayca yönetin, tedavi kayıtlarını oluşturun ve geçmiş bilgilere anında erişin.',
      features: [
        { id: 1, text: 'Kapsamlı hasta profilleri', icon: '/assets/features/hasta-icon.svg' },
        { id: 2, text: 'Gelişmiş arama ve filtreleme', icon: '/assets/features/sistem-icon.svg' },
        { id: 3, text: 'Entegre tedavi planları', icon: '/assets/features/treatment-icon.svg' }
      ]
    }
  ];

  // Swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    
    // Stop auto-scroll when user is interacting
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleTouchMove = (e) => {
    if (isSwiping) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    
    // Minimum swipe distance
    const minSwipeDistance = 50;
    const swipeDistance = touchStart - touchEnd;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      // Right swipe
      if (swipeDistance > 0) {
        setActiveScreen((prev) => (prev + 1) % screenContents.length);
      } 
      // Left swipe
      else {
        setActiveScreen((prev) => (prev === 0 ? screenContents.length - 1 : prev - 1));
      }
    }
    
    // Restart auto-scroll
    startAutoScroll();
  };

  // Auto-scroll function
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screenContents.length);
    }, 5000); // Change every 5 seconds
  };

  // Auto-scroll effect
  useEffect(() => {
    startAutoScroll();
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [screenContents.length]);

  // Manual screen change function
  const changeScreen = (index) => {
    setActiveScreen(index);
    
    // Reset auto-scroll when screen is changed manually
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    startAutoScroll();
  };

  // Observe when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  // Handle parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current && isVisible) {
        const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  // Get current screen content
  const currentScreen = screenContents[activeScreen];

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.backgroundBlob}></div>
      <div className={styles.secondaryBlob}></div>
      
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              <span className={styles.highlightText}>{currentScreen.title.split(' ')[0]}</span> {currentScreen.title.split(' ').slice(1).join(' ')}
            </h2>
            
            <div className={styles.underline}>
              <div className={styles.underlineDot}></div>
            </div>
            
            <p className={styles.description}>
              {currentScreen.description}
            </p>
            
            <ul className={styles.featureList}>
              {currentScreen.features.map((feature) => (
                <li key={feature.id} className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                    <Image
                      src={feature.icon}
                      alt={feature.text}
                      width={24}
                      height={24}
                      className={styles.iconImage}
                    />
                  </span>
                  <span className={styles.featureText}>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <div className={styles.indicators}>
              {screenContents.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${activeScreen === index ? styles.active : ''}`}
                  onClick={() => changeScreen(index)}
                  aria-label={`Screen ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className={styles.deviceContainer}>
            <div 
              className={`${styles.device} ${isSwiping ? styles.swiping : ''}`}
              ref={phoneFrameRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{
                transform: isVisible ? 
                  `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg)` : 
                  'rotateY(0) rotateX(0)'
              }}
            >
              <div className={styles.deviceGlow}></div>
              <div className={styles.deviceNotch}></div>
              <div className={styles.deviceContent}>
                {screenContents.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`${styles.screenImage} ${activeScreen === index ? styles.active : ''}`}
                  >
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      className={styles.mockupImage}
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.deviceShadow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentSystem; 