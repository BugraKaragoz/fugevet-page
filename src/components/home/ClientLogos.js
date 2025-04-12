'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './ClientLogos.module.css';

// Add SVG icons for statistics
const SmileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

// Semi Donut Chart Component - Optimize edilmiş
const DonutChartStat = ({ value, title, color, icon, percentage }) => {
  // Rotation değerini sanki animasyon tamamlanmış gibi sabit değer olarak hesaplıyoruz
  // Bu daha iyi performans sağlar, çünkü CSS değişkenleri daha az güncellenir
  const rotation = percentage ? Math.min(180, Math.max(0, (180 * percentage) / 100)) : 180;
  
  return (
    <div className={styles.donutStatItem}>
      <div className={styles.donutContainer}>
        {/* Donut animasyonu için sabit stil kullanıyoruz */}
        <div 
          className={styles.donutChart} 
          style={{ 
            '--color': color, 
            '--rotation': `${rotation}deg` 
          }}
        >
          <div className={styles.donutInner}>
            <span className={styles.donutValue} style={{ color }}>{value}</span>
            <div className={styles.donutIcon} style={{ color }}>{icon}</div>
          </div>
        </div>
      </div>
      <h3 className={styles.donutTitle}>{title}</h3>
    </div>
  );
};

const ClientLogos = () => {
  // Sayaç animasyonu için ref kullanımı - daha optimize
  const countsRef = useRef({
    satisfaction: 0,
    users: 0,
    security: 0
  });
  
  // Hedef değerler - en baştan tanımlayalım
  const targetValues = {
    satisfaction: 99,
    users: 10,
    security: 100
  };
  
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
  // RAF handle
  const animationRef = useRef(null);

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
      
      // Animasyonu temizle
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Sayma animasyonu - optimize edildi
  const startCounting = () => {
    // Başlangıç değerleri
    const startTime = Date.now();
    const duration = 1800; // Biraz daha hızlı animasyon
    
    // Daha az frame güncelleme için zamanlayıcı
    let lastUpdate = 0;
    const updateInterval = 80; // ms
    
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
          satisfaction: Math.floor(easeOutProgress * targetValues.satisfaction),
          users: Math.floor(easeOutProgress * targetValues.users),
          security: Math.floor(easeOutProgress * targetValues.security)
        };
        
        // Daha nadir state güncellemesi
        if (now - lastUpdate > updateInterval) {
          lastUpdate = now;
          setCounts({...countsRef.current});
        }
        
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animasyon bittiğinde kesin değerleri ayarla
        setCounts(targetValues);
      }
    };
    
    // Animasyonu başlat
    animationRef.current = requestAnimationFrame(animate);
  };

  // Color scheme for the charts
  const chartColors = {
    satisfaction: '#4CD4B0', // Teal/turquoise for satisfaction
    users: '#FFD166',        // Yellow/gold for user count
    security: '#FF686B'      // Coral/reddish for security
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
          <DonutChartStat 
            value={`%${counts.satisfaction}`}
            title="Müşteri Memnuniyeti"
            color={chartColors.satisfaction}
            icon={<SmileIcon />}
            percentage={counts.satisfaction}
          />
          
          <DonutChartStat 
            value={`${counts.users}K+`}
            title="Global Kullanıcı"
            color={chartColors.users}
            icon={<GlobeIcon />}
            percentage={75} // For visual variety
          />
          
          <DonutChartStat 
            value={`%${counts.security}`}
            title="Güvenli & Güvenilir"
            color={chartColors.security}
            icon={<ShieldIcon />}
            percentage={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ClientLogos; 