'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './FeatureDetails.module.css';
import React from 'react';

const FeatureDetails = ({ id, title, description, image, features, reversed }) => {
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
  
  return (
    <section id={id} className={`${styles.featureSection} ${reversed ? styles.reversed : ''}`} ref={sectionRef}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        
        <ul className={styles.featureList}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <span className={styles.checkIcon}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image 
            src={image} 
            alt={title} 
            className={styles.featureImage}
            width={500}
            height={400}
            loading="lazy"
            priority={false}
            quality={75}
          />
        </div>
      </div>
    </section>
  );
};

// React.memo ile sarmalararak gereksiz render'ları önlüyoruz
export default React.memo(FeatureDetails); 