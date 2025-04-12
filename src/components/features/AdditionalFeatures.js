'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './AdditionalFeatures.module.css';

const AdditionalFeatures = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
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
  
  const additionalFeatures = [
    {
      id: 'randevu',
      title: 'Akıllı Randevu Yönetimi',
      description: 'Müşteri ve tedarikçilerinizin bakiyesini anında görün. Ödeme ve tahsilatlarınızı takip edin.',
      icon: '/assets/features/randevu-icon.svg'
    },
    {
      id: 'hatirlatici',
      title: 'Otomatik Hatırlatıcılar',
      description: 'Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.',
      icon: '/assets/features/hatirlatici-icon.svg'
    },
    {
      id: 'muhasebe',
      title: 'Muhasebe Yönetimi',
      description: 'Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.',
      icon: '/assets/features/muhasebe-icon.svg'
    },
    {
      id: 'musteri',
      title: 'Müşteri Yönetimi',
      description: 'Gelir ve giderlerinizi güncel olarak takip edin, işletmenizin nakit akışını kontrol altında tutun.',
      icon: '/assets/features/musteri-icon.svg'
    },
    {
      id: 'bulut',
      title: 'Bulut Teknoloji',
      description: 'Tüm verilerinizi bulut sunucularda güvenli bir şekilde saklayın ve izinsiz erişimi engelleyin.',
      icon: '/assets/features/bulut-icon.svg'
    },
    {
      id: 'whatsapp',
      title: 'Whatsapp ve SMS Entegrasyonu',
      description: 'Müşterilerinize Whatsapp yada SMS üzerinden bilgilendirme yapın.',
      icon: '/assets/features/whatsapp-icon.svg'
    },
    {
      id: 'stok',
      title: 'Ürün Stok Takibi',
      description: 'Stoktaki ürünlerinizi takip ederek, kritik noktaya ulaştığında otomatik bilgilendirir.',
      icon: '/assets/features/stok-icon.svg'
    },
    {
      id: 'raporlama',
      title: 'Gelişmiş Raporlama',
      description: 'İşletmenize ait tüm verilerin özel zaman aralıkları ve gelişmiş filtrelelemeler ile detaylı analizlerini raporlayın.',
      icon: '/assets/features/rapor-icon.svg'
    },
    {
      id: 'insan',
      title: 'İnsan Kaynakları',
      description: 'Personellerinizin çalışma takvimi, izin yönetimi, satış primleri ve özlük yönetimini kolayca yapın.',
      icon: '/assets/features/insan-icon.svg'
    },
    {
      id: 'gorusmeler',
      title: 'Ön Görüşmeler',
      description: 'Ziyaretçileriniz ile yapılan ön görüşmeleri kaydederek, müşteriye dönüştürene kadar takip eder ve etkileşimde bulunur.',
      icon: '/assets/features/gorusme-icon.svg'
    },
    {
      id: 'sube',
      title: 'Çoklu Şube Modülü',
      description: 'Birden fazla şubesi olan işletmeler için tüm şubelerinizi kolaylıkla takip edin.',
      icon: '/assets/features/sube-icon.svg'
    },
    {
      id: 'sistem',
      title: 'Detaylı Sistem Hareketleri',
      description: 'Personel ve kullanıcılarınızın neler yaptığını detaylı inceleyin (log kaydı)',
      icon: '/assets/features/sistem-icon.svg'
    },
    {
      id: 'satis',
      title: 'Satışlar',
      description: 'Hızlı satış ile satışlarınızı kolayca yönetin, hesabınızı bilin.',
      icon: '/assets/features/satis-icon.svg'
    },
    {
      id: 'hasta',
      title: 'Hasta Muayeneleri',
      description: 'Hastalarınızın her zaman muayene edebilirsiniz.',
      icon: '/assets/features/hasta-icon.svg'
    },
    {
      id: 'asi',
      title: 'Aşı Takvimi',
      description: 'Müşterilerinizin aşılarının zamanlarını hatırlama zorunluluğu zahmetinden kurtulacaksınız.',
      icon: '/assets/features/asi-icon.svg'
    }
  ];

  return (
    <section className={styles.additionalFeaturesSection} ref={sectionRef}>
      <h2 className={styles.sectionTitle}>Diğer Özellikler</h2>
      <div className={styles.featuresGrid}>
        {additionalFeatures.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            <div className={styles.iconContainer}>
              <img 
                src={feature.icon} 
                alt={feature.title}
                width={60}
                height={60}
                className={styles.featureIcon}
              />
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.ctaSection}>
        <h3 className={styles.ctaTitle}>Ve daha onlarca özellik</h3>
        <p className={styles.ctaDescription}>
          Listede yer almayan özellikleri ücretsiz üyelik oluşturarak deneyin.
        </p>
        <Link href="/trial" className={styles.ctaButton}>
          Ücretsiz dene <span className={styles.buttonArrow}>›</span>
        </Link>
      </div>
    </section>
  );
};

export default AdditionalFeatures; 