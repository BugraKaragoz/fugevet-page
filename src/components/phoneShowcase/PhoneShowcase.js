'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './PhoneShowcase.module.css';

const PhoneShowcase = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isSwiping, setIsSwiping] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const showcaseRef = useRef(null);
  const phoneFrameRef = useRef(null);
  const autoScrollRef = useRef(null);
  
  // Ekran içerikleri - her biri bir görsel ve metin içerir
  const screenContents = [
    {
      id: 1,
      image: '/assets/yeni1.png',
      title: 'Giriş ve Kullanıcı Dostu Arayüz',
      description: 'Kolay kullanımlı arayüz ile veteriner kliniğinizi saniyeler içinde yönetin. Güvenli giriş sistemi ve kişiselleştirilmiş kullanıcı deneyimi ile hızlı erişim sağlayın.'
    },
    {
      id: 2,
      image: '/assets/yeni2.png',
      title: 'Görev ve Hasta Takibi',
      description: 'Tüm görevleri ve hasta takiplerini tek ekranda görüntüleyin. Tedavi süreçlerini kategorize edin, önceliklendirin ve ekibinizle anlık olarak paylaşın.'
    },
    {
      id: 3,
      image: '/assets/yeni 3.png',
      title: 'Tedavi Kayıt Sistemi',
      description: 'Detaylı tedavi kayıtları oluşturun, muayene bilgilerini ekleyin ve veteriner hekimlerinizi kolayca atayın. Tedavi geçmişini kronolojik olarak görüntüleyin.'
    },
    {
      id: 4,
      image: '/assets/yeni4.png',
      title: 'Kapsamlı Klinik Yönetimi',
      description: 'Binlerce hasta sahibi ve evcil hayvan kaydını yönetin. Günlük randevuları takip edin, yeni hizmetler ekleyin ve kliniğinizin performansını gerçek zamanlı izleyin.'
    }
  ];

  // Swipe yönünü belirleme
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
    // Otomatik scroll'u durdur
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
    
    // Minimum swipe mesafesi
    const minSwipeDistance = 50;
    const swipeDistance = touchStart - touchEnd;
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
      // Sağa swipe
      if (swipeDistance > 0) {
        setActiveScreen((prev) => (prev + 1) % screenContents.length);
      } 
      // Sola swipe
      else {
        setActiveScreen((prev) => (prev === 0 ? screenContents.length - 1 : prev - 1));
      }
    }
    
    // Otomatik scroll'u tekrar başlat
    startAutoScroll();
  };

  // Otomatik scroll başlatma fonksiyonu
  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screenContents.length);
    }, 5000); // Her 5 saniyede bir değiştir
  };

  // Ekranı otomatik değiştirmek için
  useEffect(() => {
    startAutoScroll();
    
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [screenContents.length]);
  
  // Scroll animasyonu için
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }
    
    return () => {
      if (showcaseRef.current) {
        observer.unobserve(showcaseRef.current);
      }
    };
  }, []);

  // Manuel ekran değiştirme fonksiyonu
  const changeScreen = (index) => {
    setActiveScreen(index);
    
    // Ekran manuel değiştirildiğinde otomatik scroll'u sıfırla
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    startAutoScroll();
  };

  return (
    <section className={styles.phoneShowcase} ref={showcaseRef}>
      <div className={styles.decorWave}></div>
      
      {/* Arka plan animasyonlu elementleri */}
      <div className={styles.floatingCircle1}></div>
      <div className={styles.floatingCircle2}></div>
      <div className={styles.floatingCircle3}></div>
      <div className={styles.floatingDot1}></div>
      <div className={styles.floatingDot2}></div>
      <div className={styles.floatingDot3}></div>
      <div className={styles.floatingDot4}></div>
      <div className={styles.floatingDot5}></div>
      
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{screenContents[activeScreen].title}</h2>
            <div className={styles.separator}></div>
            <p className={styles.description}>{screenContents[activeScreen].description}</p>
            
            <div className={styles.indicators}>
              {screenContents.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${activeScreen === index ? styles.active : ''}`}
                  onClick={() => changeScreen(index)}
                  aria-label={`Ekran ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className={styles.phoneContainer}>
            <div 
              className={`${styles.phoneFrame} ${isSwiping ? styles.swiping : ''}`} 
              ref={phoneFrameRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className={styles.phoneGlow}></div>
              <div className={styles.phoneNotch}></div>
              <div className={styles.phoneScreen}>
                {/* Tüm ekranları hazır tut ve sadece aktif olanı göster */}
                {screenContents.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`${styles.screenImage} ${activeScreen === index ? styles.active : ''}`}
                  >
                    <Image
                      src={screen.image}
                      alt={screen.title}
                      fill
                      sizes="100%"
                      priority={index === 0}
                      className={styles.appScreenshot}
                      style={{ 
                        objectFit: 'contain', 
                        objectPosition: 'center', 
                        backgroundColor: '#fff' 
                      }}
                      unoptimized={true}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.phoneButton}></div>
            </div>
            
            {/* Telefon gölgesi */}
            <div className={`${styles.phoneShadow} ${isSwiping ? styles.swipingShadow : ''}`}></div>
            
            {/* Swipe göstergesi */}
            <div className={styles.swipeIndicator}>
              <span className={styles.swipeText}>Kaydırın</span>
              <div className={styles.swipeArrows}>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneShowcase; 