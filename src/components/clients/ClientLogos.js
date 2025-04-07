'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './ClientLogos.module.css';

const ClientLogos = () => {
  // Sayaç animasyonu için ref kullanımı - daha optimize
  const countsRef = useRef({
    satisfaction: 0,
    users: 0,
    security: 0
  });
  
  // State'i sadece gerçek güncellemeler için kullanıyoruz
  const [counts, setCounts] = useState({
    satisfaction: 0,
    users: 0,
    security: 0
  });
  
  // Animasyon çalışıyor mu?
  const isCountingRef = useRef(false);
  // Observer referansı
  const observerRef = useRef(null);
  // Sayaç bölümünün referansı
  const statsRef = useRef(null);

  useEffect(() => {
    // Scroll pozisyonuna göre animasyonu başlatma
    const startCountIfVisible = (entries) => {
      if (entries[0].isIntersecting && !isCountingRef.current) {
        isCountingRef.current = true;
        startCounting();
      }
    };
    
    // IntersectionObserver kullanarak görünürlüğü takip etme
    observerRef.current = new IntersectionObserver(startCountIfVisible, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    });
    
    if (statsRef.current) {
      observerRef.current.observe(statsRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  
  // Sayma animasyonu - optimize edildi
  const startCounting = () => {
    // Animasyon esnasında hedefler
    const targets = {
      satisfaction: 99,
      users: 10,
      security: 100
    };
    
    // Başlangıç değerleri
    const startTime = Date.now();
    const duration = 2000; // 2 saniye
    
    // Animasyon çerçevesi
    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      if (progress < 1) {
        // Easeout fonksiyonu ile daha doğal animasyon
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        
        // Değerleri güncelle - sadece ref'leri değiştir
        countsRef.current = {
          satisfaction: Math.floor(easeOutProgress * targets.satisfaction),
          users: Math.floor(easeOutProgress * targets.users),
          security: Math.floor(easeOutProgress * targets.security)
        };
        
        // Her 3 frame'de bir state güncelle (performans için)
        if (elapsed % 3 === 0) {
          setCounts(countsRef.current);
        }
        
        requestAnimationFrame(animate);
      } else {
        // Animasyon bittiğinde kesin değerleri ayarla
        countsRef.current = targets;
        setCounts(targets);
      }
    };
    
    // Animasyonu başlat
    requestAnimationFrame(animate);
  };

  // Daha modern şirket logoları için dummy veri
  const clients = [
    { 
      id: 1, 
      name: 'Pati Veteriner', 
      imageUrl: 'https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 2, 
      name: 'VetLife Kliniği', 
      imageUrl: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 3, 
      name: 'Animal Care', 
      imageUrl: 'https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 4, 
      name: 'Hayat Veteriner', 
      imageUrl: 'https://images.pexels.com/photos/3198032/pexels-photo-3198032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 5, 
      name: 'Dostlar Kliniği', 
      imageUrl: 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 6, 
      name: 'Modern Vet', 
      imageUrl: 'https://images.pexels.com/photos/1591939/pexels-photo-1591939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 7, 
      name: 'Sevimli Patiler', 
      imageUrl: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 8, 
      name: 'Evcil Dostlar', 
      imageUrl: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 9, 
      name: 'Pet Plus', 
      imageUrl: 'https://images.pexels.com/photos/33953/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
    { 
      id: 10, 
      name: 'Happy Pets', 
      imageUrl: 'https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    },
  ];
  
  return (
    <section className={styles.clientsSection}>
      <div className={styles.container}>
        <div className={styles.decorDot} />
        <div className={styles.decorCircle} />
        <div className={styles.decorTriangle} />
        
        <h2 className={styles.title}>Mutlu Müşterilerimiz</h2>
        <p className={styles.subtitle}>
          Türkiye'nin dört bir yanındaki veteriner klinikleri yazılımımıza güveniyor
        </p>
      </div>
      
      {/* İlk Marquee - Soldan Sağa */}
      <div className={styles.logosContainer}>
        <div className={styles.logoScroller}>
          {/* Logolar - İlk grup */}
          {clients.map((client) => (
            <div 
              key={client.id} 
              className={styles.logoItem}
            >
              <img 
                src={client.imageUrl} 
                alt={client.name} 
                className={styles.logoImage} 
              />
              <span className={styles.logoText}>{client.name}</span>
            </div>
          ))}
          
          {/* İkinci grup kopya */}
          {clients.map((client) => (
            <div 
              key={`duplicate-1-${client.id}`} 
              className={styles.logoItem}
            >
              <img 
                src={client.imageUrl} 
                alt={client.name} 
                className={styles.logoImage} 
              />
              <span className={styles.logoText}>{client.name}</span>
            </div>
          ))}
        </div>
        
        {/* İkinci Marquee - Sağdan Sola (Ters yönde hareket eden) */}
        <div className={styles.logoScrollerReverse}>
          {/* Ters yönde hareket eden logolar */}
          {clients.slice().reverse().map((client) => (
            <div 
              key={`reverse-${client.id}`} 
              className={styles.logoItem}
            >
              <img 
                src={client.imageUrl} 
                alt={client.name} 
                className={styles.logoImage} 
              />
              <span className={styles.logoText}>{client.name}</span>
            </div>
          ))}
          
          {/* İkinci grup kopya (ters yön için) */}
          {clients.slice().reverse().map((client) => (
            <div 
              key={`reverse-duplicate-${client.id}`} 
              className={styles.logoItem}
            >
              <img 
                src={client.imageUrl} 
                alt={client.name} 
                className={styles.logoImage} 
              />
              <span className={styles.logoText}>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.trustBadges} ref={statsRef}>
          <div className={`${styles.statItem} ${styles.animateIn}`}>
            <h3 className={styles.badgeTitle}>%{counts.satisfaction}</h3>
            <p className={styles.badgeText}>Müşteri Memnuniyeti</p>
          </div>
          
          <div className={`${styles.statItem} ${styles.animateIn}`} style={{animationDelay: '0.2s'}}>
            <h3 className={styles.badgeTitle}>{counts.users}K+</h3>
            <p className={styles.badgeText}>Global Kullanıcı</p>
          </div>
          
          <div className={`${styles.statItem} ${styles.animateIn}`} style={{animationDelay: '0.4s'}}>
            <h3 className={styles.badgeTitle}>%{counts.security}</h3>
            <p className={styles.badgeText}>Güvenli & Güvenilir</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 