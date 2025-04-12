'use client';

import { useState } from 'react';
import styles from './PricingPlans.module.css';
import Link from 'next/link';

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: '14 Gün Ücretsiz',
      price: {
        monthly: '₺0',
        yearly: '₺0'
      },
      description: 'Tüm özellikleri 14 gün boyunca ücretsiz deneyin',
      features: [
        'Hasta kayıt yönetimi',
        'Temel randevu sistemi',
        'Dijital reçete oluşturma',
        'Mobil uygulama erişimi',
        'E-mail desteği'
      ],
      buttonText: 'Hemen Dene',
      type: 'free'
    },
    {
      name: 'Kurumsal',
      price: {
        monthly: '₺999',
        yearly: '₺9,990'
      },
      description: 'Büyük veteriner hastaneleri için kurumsal çözüm',
      features: [
        'Sınırsız hasta kaydı',
        'Gelişmiş randevu yönetimi',
        'SMS hatırlatmaları',
        'Muhasebe entegrasyonu',
        'Çoklu şube yönetimi',
        'API erişimi',
        'Özel entegrasyonlar',
        '7/24 öncelikli destek'
      ],
      buttonText: 'Hemen Başla',
      type: 'premium',
      badge: 'Best Deal'
    }
  ];

  return (
    <section className={styles.pricingSection}>
      <div className={styles.billingToggle}>
        <button
          className={`${styles.toggleButton} ${billingCycle === 'monthly' ? styles.active : ''}`}
          onClick={() => setBillingCycle('monthly')}
        >
          Aylık
        </button>
        <button
          className={`${styles.toggleButton} ${billingCycle === 'yearly' ? styles.active : ''}`}
          onClick={() => setBillingCycle('yearly')}
        >
          Yıllık
          <span className={styles.discountBadge}>%16 Tasarruf</span>
        </button>
      </div>

      <div className={styles.plansGrid}>
        {plans.map((plan, index) => (
          <div key={index} className={`${styles.planCard} ${plan.type === 'premium' ? styles.premium : ''}`}>
            {plan.type === 'premium' && <span className={styles.bestDeal}>Best Deal</span>}
            <div className={styles.planIcon}>
              {plan.type === 'free' ? '🎁' : '⭐'}
            </div>
            <h3 className={styles.planName}>{plan.name}</h3>
            <div className={styles.planPrice}>
              <span className={styles.price}>{plan.price[billingCycle]}</span>
              <span className={styles.period}>/{billingCycle === 'monthly' ? 'ay' : 'yıl'}</span>
            </div>
            <p className={styles.planDescription}>{plan.description}</p>
            <ul className={styles.featuresList}>
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              className={`${styles.planButton} ${plan.type === 'premium' ? styles.premiumButton : ''}`}
            >
              {plan.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans; 